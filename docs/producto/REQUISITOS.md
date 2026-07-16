# Producto: fuente de verdad (Landing)

Este doc manda sobre cualquier suposicion: si el codigo lo contradice, el codigo esta mal.

## Que es y que problema resuelve

La landing es la **puerta de entrada** en la raiz `angelezequiel.dev`. Cumple dos funciones:

1. **Hub / directorio de enlaces**: un punto unico y de carga instantanea que lleva al portfolio, GitHub, LinkedIn y contacto de Angel. Es lo que se comparte como "mi sitio".
2. **Alojamiento legal**: paginas de Politica de Privacidad y Terminos y Condiciones de las apps de Angel, renderizadas desde Markdown. Sirven para pasar la validacion de tiendas de aplicaciones (Google Play, App Store), que exigen una URL publica y estable con esos documentos.

El valor: un sitio estatico, extremadamente ligero, que carga en menos de un segundo, se indexa rapido y da una URL legal estable por app sin montar infraestructura.

## Que NO es (anti-alcance)

- **No es el portfolio.** No lleva el case study de ACP, ni el catalogo de certificaciones, ni las secciones profundas. Enlaza al portfolio, que vive en su propio repo (subdominio o subruta, decision del dueno).
- **No tiene backend.** Ni formularios que hablen con una API, ni login, ni panel. La administracion de contenido dinamico es del proyecto `admin`.
- **No es un blog.** No hay CMS ni feed de articulos en la v1.
- **No inventa contenido.** Solo enlaces reales y textos legales reales redactados o aprobados por el dueno.

## Roles / usuarios

| Rol | Quien es | Que hace |
| --- | --- | --- |
| Visitante / reclutador | Cualquiera con el enlace | Llega a la raiz, entiende quien es Angel y salta al portfolio, GitHub o LinkedIn. |
| Revisor de tienda | Google Play / App Store | Abre la URL legal de una app para validar privacidad y terminos. |
| Dueno (Angel) | Mantenedor | Actualiza enlaces y textos legales editando Markdown y desplegando. |

No hay usuarios autenticados: todo el contenido es publico.

## Flujos principales (de punta a punta)

### Flujo 1: visitante llega al hub
1. Abre `angelezequiel.dev`.
2. Ve la identidad de Angel y el directorio de enlaces.
3. Hace clic en "Portfolio" y sale al portfolio (subdominio/subruta). Los demas enlaces (GitHub, LinkedIn, email) salen a sus destinos.

### Flujo 2: validacion de tienda
1. La ficha de la app en la tienda apunta a `angelezequiel.dev/<app>/privacidad/` (y `/terminos/`).
2. El revisor abre la URL; la pagina carga el documento legal desde Markdown, con fecha de ultima actualizacion visible.
3. No requiere JS: el contenido es HTML estatico (mejora progresiva).

### Flujo 3: dueno actualiza un legal
1. Edita el Markdown del documento en `src/content/legal/`.
2. `astro build` + `preview` local; abre rama corta -> `develop`.
3. El dueno mergea a `main`; Pages redepliega. La URL no cambia.

## Reglas de negocio

- **Cada app tiene su par de legales** (privacidad + terminos), con URL estable que no cambia entre versiones de la app. Cambiar una URL legal ya publicada rompe la validacion de la tienda: no se hace sin migrar la ficha.
- **Toda pagina legal muestra fecha de ultima actualizacion.**
- **Bilingue si el portfolio lo es** (ES/EN): a confirmar si los legales se sirven en ambos idiomas o solo en el que exige la tienda (TBD, ver PENDIENTES_DUENO).
- **El contenido legal lo redacta o aprueba el dueno.** El agente no inventa clausulas legales.

## Decisiones de producto tomadas

| Fecha | Decision | Porque / ADR |
| --- | --- | --- |
| 2026-07-15 | Landing en la raiz; portfolio se mueve a subdominio o subruta y sigue como repo aparte | Decision del dueno. [`adr/0002`](../adr/0002-dominio-raiz-y-relacion-portfolio.md) |
| 2026-07-15 | Contenido estatico en el repo, sin CMS en la v1 | Simplicidad; el CMS es del ecosistema `admin`. [`adr/0003`](../adr/0003-contenido-en-repo-sin-backend.md) |
| 2026-07-15 | Stack alineado con el portfolio (Astro + Tailwind 4) | Reuso de convenciones y tooling. [`adr/0001`](../adr/0001-stack.md) |

## TBD (decisiones abiertas, ver PENDIENTES_DUENO)

- Ubicacion final del portfolio (subdominio `me.`/`www.` o subruta `/portfolio/`).
- Inventario de apps que necesitan legales (nombres y cuales van primero).
- Idiomas de los legales (solo ES, o ES/EN).
- Si el directorio de proyectos de la landing se alimenta a futuro desde `admin` (API) o se queda estatico.

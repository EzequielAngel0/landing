# Estrategia de pruebas (Landing)

Sitio estatico: la verificacion es de build, contenido y rendimiento, no de suites de backend.

| Nivel | Que cubre | Comando | Cuando |
| --- | --- | --- | --- |
| Build + tipos | Colecciones y rutas validas | `astro check` + `astro build` | cada push (CI) |
| Preview fiel | El sitio real servido | `astro preview` | antes de mergear |
| Sin JS | El contenido se lee con JavaScript deshabilitado (mejora progresiva) | manual en el navegador | antes de mergear |
| Legales | Cada app tiene su par (privacidad + terminos) con `updatedAt`; rutas estables | validacion en `content.config` + revision manual | al agregar/editar un legal |
| Rendimiento / a11y | Lighthouse 90+ (objetivo interno 95+), contraste AA | Lighthouse | antes de merge a `main` |

## Reglas

- **El build real es `astro build` + `astro preview`**, no `astro dev`. Opcional: verificar en contenedor Podman (Node 24), como el portfolio.
- **Pase de reglas duras** (doc 02 del portfolio) antes de cerrar cualquier ronda de contenido: grep de em dash y emojis sobre `src/`.
- Los legales no se dan por buenos hasta que el dueno los aprueba (no inventar clausulas).

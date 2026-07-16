# System Design: HUB de arquitectura (Landing)

Documento central de arquitectura. Base: `System Design 1: Landing Page (Hub Central & Legal)`, complementado con las decisiones del portfolio.

## §1 Estado actual

Bootstrap en curso (F1). Existe el scaffold Astro 7 + Tailwind 4 con el hub (identidad similar al portfolio) y las primeras paginas legales (SoloKey y portfolio) via coleccion de contenido, verificado en contenedor Podman. Aun sin desplegar a produccion ni CI.

## §2 Topologia

Sistema estatico puro. No hay servidor de aplicacion ni base de datos.

```
Visitante
   |
   v
Cloudflare (DNS + 301 www -> raiz + analitica sin cookies + CDN/cache)
   |
   v
GitHub Pages  (sitio estatico, artefacto de "astro build")
   |
   +-- /                         Home: identidad + directorio de enlaces
   +-- /<app>/privacidad/        Legal renderizado desde Markdown
   +-- /<app>/terminos/
```

- **Sin backend.** Todo se resuelve en build; el runtime del cliente es HTML + CSS + JS minimo (tema, idioma).
- **Enlaces salientes**: el portfolio (subdominio o subruta), GitHub, LinkedIn, email.
- **Entornos**: `local` (astro dev/preview, o Podman), `prod` (GitHub Pages tras merge a `main`). No hace falta staging para un estatico de este tamano; si se quiere, se sirve una preview desde `develop` (ver GO_LIVE).

## §3 Stack y porques

| Capa | Eleccion | Porque (ADR) |
| --- | --- | --- |
| Framework | Astro (SSG) | Zero JS por defecto, contenido tipado, mismo stack que el portfolio. [`adr/0001`](../adr/0001-stack.md) |
| Estilos | Tailwind CSS 4 (`@tailwindcss/vite`, tokens `@theme`) | CSS-first, sin config JS, reuso del sistema de tokens del portfolio. [`adr/0001`](../adr/0001-stack.md) |
| Lenguaje | TypeScript estricto | Colecciones tipadas (Zod) para legales y enlaces. |
| Contenido | Markdown + datos tipados en el repo (sin CMS) | Legales versionados, diffs revisables. [`adr/0003`](../adr/0003-contenido-en-repo-sin-backend.md) |
| Fuentes | Self-hosted subset latin | Sin CDN de Google (regla del portfolio). |
| Hosting | GitHub Pages, repo publico | Continuidad con el portfolio. [`adr/0004`](../adr/0004-hosting-pages-y-cloudflare.md) |
| DNS / borde | Cloudflare (DNS + 301 www -> raiz) | Redireccion estricta y analitica sin cookies. [`adr/0004`](../adr/0004-hosting-pages-y-cloudflare.md) |
| CI/CD | GitHub Actions (build + deploy a Pages tras merge a `main`) | Igual patron que el portfolio. |

Versiones exactas (Astro 7, Node 24 LTS, lockfile multiplataforma) se fijan al hacer bootstrap, siguiendo el ADR 0008 del portfolio.

## §4 Datos

No hay base de datos. El "modelo de datos" es el modelo de **contenido** (directorio de enlaces + documentos legales), detallado en [`DATOS.md`](DATOS.md). Todo vive en el repo como Markdown y datos tipados.

## §5 Auth

No aplica. No hay usuarios autenticados; todo el contenido es publico. La administracion es editar el repo y desplegar.

## §6 Seguridad

Superficie minima (sitio estatico). Lo relevante: cabeceras de seguridad (CSP, HSTS, `nosniff`, frame-deny) servidas desde Cloudflare, porque GitHub Pages no emite cabeceras propias (un CSP acotado puede ir por `<meta http-equiv>` solo como refuerzo; HSTS y `nosniff` exigen cabecera real). Ademas: integridad del contenido legal y que la analitica sea sin cookies. Detalle y donde vive cada cabecera en [`../seguridad/SEGURIDAD.md`](../seguridad/SEGURIDAD.md).

## §7 Entornos y despliegue

- **Build**: `astro build` genera el sitio estatico. Verificacion fiel con `astro preview` (no solo `dev`), y opcionalmente en contenedor Podman (Node 24), como el portfolio.
- **Deploy**: automatico a GitHub Pages en cada push a `main` (workflow de Actions). `develop` corre CI (check + build) pero NO despliega.
- **Dominio**: `angelezequiel.dev` en la raiz, `CNAME` en `public/`, base en raiz (sin `base`), `trailingSlash: 'always'`. `www` redirige a la raiz con 301 en Cloudflare.
- **Secretos**: no hay. El sitio no usa llaves en runtime; el beacon de analitica (si se usa) es un id publico.

## §8 Relacion con el ecosistema

- **portfolio**: destino del enlace principal; repo y deploy separados.
- **admin**: a futuro podria exponer una API para alimentar el directorio de proyectos de la landing; en la v1 la landing NO depende de admin (contenido en el repo). Si se conecta, se documenta con un ADR nuevo.

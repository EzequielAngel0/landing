# Pendientes del DUENO: lo que solo tu puedes hacer (Landing)

Dashboards/consolas, cuentas, decisiones y legal. Contraparte: [`PENDIENTES_AGENTE.md`](PENDIENTES_AGENTE.md). Actualizado: 2026-07-15.

## A. Cuentas y servicios por configurar

| Estado | Servicio | Para que | Donde queda la llave |
| --- | --- | --- | --- |
| [hecho] | Cloudflare DNS | raiz `angelezequiel.dev` CNAME a ezequielangel0.github.io (DNS only), igual `www` y `portfolio.` (verificado 2026-07-16). El 301 www lo maneja GitHub al fijar el apex como custom domain | consola Cloudflare |
| [hecho] | GitHub Pages | repo github.com/EzequielAngel0/landing con Source: GitHub Actions y custom domain `angelezequiel.dev` (2026-07-16) | consola GitHub |
| [hecho] | `Enforce HTTPS` | activado por el dueno (2026-07-16) | Pages |
| [hecho] | Cloudflare Web Analytics | sitio creado y token entregado; beacon solo-produccion integrado (2026-07-16) | consola Cloudflare |
| [ ] | Cabeceras de seguridad | CSP, HSTS, `nosniff`, frame-deny (Pages no las emite; van en Cloudflare: Transform Rules + HSTS) | consola Cloudflare |

## B. Decisiones pendientes (di si/no; el codigo lo hace el agente)

| Estado | Decision | Contexto / recomendacion |
| --- | --- | --- |
| [resuelto] | Ubicacion del portfolio al salir de la raiz | Decidido y ejecutado (2026-07-16): subdominio `portfolio.angelezequiel.dev`. Ver ADR 0002 |
| [resuelto] | Idiomas de los legales | Decidido (2026-07-16): ES/EN. ES en `/<app>/<kind>/`, EN con slug localizado en `/en/<app>/<slug>/`; pares validados en build |
| [resuelto] | Estilo visual de la landing | Decidido (2026-07-16): identidad similar al portfolio (hermana), reusando su sistema de diseno (Archivo + IBM Plex Mono + Bebas Neue, tinta azul, papel). No es identidad propia ni ajena |
| [resuelto] | Legales via admin o en el repo | Decidido (2026-07-16): los legales se quedan versionados en ESTE repo; la API de admin solo cataloga proyectos y certificaciones. Si algun dia se editan desde el panel, admin commitea al repo (PR), no los sirve desde BD. Registrado tambien en admin/docs/producto/REQUISITOS.md |

## C. Contenido que solo tu entregas

- [hecho] Apps con legales: SoloKey, portfolio, la propia landing (2026-07-16) y DocuAgent (2026-07-18, a partir de los borradores redactados por ti en `agentes/docs/legal/`). El inventario sigue vivo: al publicar una app nueva, agregar su par.
- [ ] Revision de fondo y aprobacion de los 18 legales publicados (9 documentos x ES/EN); son fieles al codigo (y en DocuAgent, a tus borradores), pero la aprobacion final es tuya antes de usarlos en fichas de tienda.
- [ ] DocuAgent: confirmar el periodo de conservacion de la bitacora (el agente publico 12 meses, el ejemplo sugerido en tu propio borrador).
- [hecho] Enlaces reales del directorio (portfolio, GitHub, LinkedIn, X, WhatsApp, correo), tomados de site.ts del portfolio (2026-07-16).

## D. Migracion del dominio (critico)

- [hecho] El portfolio ya dejo la raiz: migrado a `portfolio.angelezequiel.dev` (confirmado por el dueno, 2026-07-16). La raiz queda libre para la landing.

## E. Operacion recurrente (agendar)

| Cadencia | Que |
| --- | --- |
| al publicar una app | agregar su par de legales antes de subirla a la tienda |
| anual | renovacion del dominio |

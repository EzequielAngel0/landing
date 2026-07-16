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
| [ ] | Ubicacion del portfolio al salir de la raiz | subdominio (`me.`, `www.`) o subruta (`/portfolio/`). Recomendacion: subdominio para separar repos y deploys limpios. Ver ADR 0002 |
| [ ] | Idiomas de los legales | solo ES o ES/EN. Recomendacion: el que exija la tienda; ES/EN si el portfolio ya es bilingue |
| [resuelto] | Estilo visual de la landing | Decidido (2026-07-16): identidad similar al portfolio (hermana), reusando su sistema de diseno (Archivo + IBM Plex Mono + Bebas Neue, tinta azul, papel). No es identidad propia ni ajena |

## C. Contenido que solo tu entregas

- [ ] Inventario de apps que necesitan legales (nombres, cuales van primero).
- [ ] Textos de Politica de Privacidad y Terminos por app (redactados o aprobados por ti; el agente no inventa clausulas legales).
- [ ] Enlaces reales del directorio (portfolio, GitHub, LinkedIn, contacto/WhatsApp).

## D. Migracion del dominio (critico)

- [hecho] El portfolio ya dejo la raiz: migrado a `portfolio.angelezequiel.dev` (confirmado por el dueno, 2026-07-16). La raiz queda libre para la landing.

## E. Operacion recurrente (agendar)

| Cadencia | Que |
| --- | --- |
| al publicar una app | agregar su par de legales antes de subirla a la tienda |
| anual | renovacion del dominio |

# Ronda 2026-07-16: bootstrap del sitio y primeros legales

Tracker de la ronda. Arrancada por peticion del dueno (se salta la espera del rediseno del portfolio de PENDIENTES_AGENTE). Objetivo: ver la interfaz corriendo, alinear identidad al portfolio y subir los primeros legales.

## Orden de trabajo

Scaffold Astro 7 + Tailwind 4, hub con enlaces reales, identidad alineada al portfolio, coleccion de contenido legal (Zod) y redaccion de los legales de SoloKey y del portfolio, todo verificado en contenedor Podman.

## Decisiones y hallazgos

| # | Tema | Resultado | Estado |
| --- | --- | --- | --- |
| D1 | Identidad visual | Decidido: similar al portfolio (hermana), reusando su sistema de diseno (Archivo + IBM Plex Mono + Bebas Neue, tinta azul, papel). No propia. Reconciliado en PROMPT_INTERFAZ, PENDIENTES_DUENO B3 | [hecho] |
| D2 | Enlaces del hub | Datos reales del portfolio (site.ts): GitHub EzequielAngel0, LinkedIn angelezequiel, X Ezequiel27Angel, WhatsApp, correo, y portfolio.angelezequiel.dev | [hecho] |
| D3 | Modelo de legales | Astro Content Collections + Zod (`src/content.config.ts`), Markdown por documento en `src/content/legal/<app>/<kind>.md`, ruta `[app]/[kind].astro` a `/<app>/<kind>/` | [hecho] |
| D4 | Legales SoloKey | Borradores de privacidad, terminos y eliminacion-datos, basados en el comportamiento real (local-first, sin nube ni cuentas; unica salida a tercero: HIBP con k-Anonymity, opt-in) | [wip] (pendiente revision del dueno) |
| D5 | Legales portfolio | Borradores de privacidad y terminos (sitio estatico, analitica sin cookies de Cloudflare) | [wip] (pendiente revision del dueno) |
| D6 | Verificacion | Imagen Podman construida y servida; rutas legales responden 200 | [hecho] |
| D7 | i18n de legales | Los 5 documentos traducidos a EN. Rutas: ES en `/<app>/<kind>/`, EN con slug localizado en `/en/<app>/<slug>/` (privacy, terms, data-deletion). Validacion de pares ES/EN en build (`src/lib/legal.ts`, regla de DATOS.md) | [hecho] |
| D8 | Confirmaciones del dueno (2026-07-16) | Correo legal: el gmail publico (por ahora; luego quiza uno del dominio). Jurisdiccion: Jalisco, Mexico. Dominio del portfolio ya migrado a portfolio.angelezequiel.dev. Repo creado: github.com/EzequielAngel0/landing | [hecho] |
| D9 | i18n completo + boton de idioma | Home EN en `/en/` (componente compartido `src/components/Home.astro`), boton de idioma junto al de tema en el header (Base), chrome bilingue. 12 paginas en 200 | [hecho] |
| D10 | Modo claro calido | `--paper: #ece9e1`, `--surface: #f7f5ef` (pedido del dueno: no blanco puro); contraste AA verificado de tokens | [hecho] |
| D11 | CI/CD | `package-lock.json` generado en Linux (contenedor), Containerfile a `npm ci` + gate `check && build`, workflows `ci.yml` (develop) y `deploy.yml` (main, withastro/action v6) | [hecho] |

## IMPORTANTE: los legales son borradores

Los textos legales se generaron a partir del comportamiento observado del codigo, no por un profesional legal. Antes de enlazarlos en una ficha de tienda: el dueno debe revisarlos y aprobarlos, y para asuntos criticos conviene validacion legal. La regla del proyecto ("el dueno redacta o aprueba") se cumple con esa revision.

## Pendiente

- [ ] Revision de fondo del dueno de los 10 legales (ES+EN); correo y jurisdiccion ya confirmados (D8).
- [hecho] CI/CD: workflows listos; falta que el dueno configure Pages (Source: GitHub Actions, custom domain) y mergee develop -> main.
- [hecho] Lockfile + `npm ci` (D11).
- [hecho] i18n EN de los legales con slugs localizados (D7, D9).
- [ ] SEO de F4: sitemap, robots con sitemap, OG, hreflang alternates en el `head`.
- [ ] Barrido de estado: quedan referencias a "solo documentacion" en algun doc; revisar al cerrar la ronda.

## Cierre

- [ ] El dueno revisa la interfaz y los legales; si aprueba, se sigue con CI y despliegue.

# 0001: Astro + Tailwind 4 (alineado con el portfolio)

- **Fecha:** 2026-07-15
- **Estado:** Aceptada

## Contexto

La landing es contenido estatico (hub de enlaces + paginas legales), sin interactividad real ni backend. Debe cargar en menos de un segundo, indexarse rapido y ser mantenible. El portfolio ya resolvio exactamente este perfil con Astro 7 + Tailwind 4 + TypeScript estricto + fuentes self-hosted (docs 03 y ADR 0001/0008 del portfolio), con tooling, CI y verificacion en Podman ya probados.

## Decision

Construir la landing con **Astro (SSG) + Tailwind CSS 4** via `@tailwindcss/vite` (tokens con `@theme`), TypeScript estricto y fuentes self-hosted, reutilizando las convenciones del portfolio. Las versiones exactas (Astro 7, Node 24 LTS) se fijan al hacer bootstrap para quedar iguales al portfolio.

## Alternativas consideradas

- **HTML + CSS a mano (cero dependencias)**: mas ligero aun, pero pierde el contenido tipado (colecciones Zod para legales), el i18n nativo y el reuso de tokens/componentes del portfolio. Para 2 tipos de pagina mas legales por app, el tipado y las colecciones valen la pena.
- **Un framework con runtime (Next/SvelteKit)**: runtime de mas para un sitio sin estado; peor fit que Astro, ya descartado en el portfolio (ADR 0001).

## Consecuencias

- Se gana: mismo estandar que el portfolio (reglas duras, tokens, i18n, verificacion Podman), curva cero para el dueno.
- Se paga: una dependencia de framework para un sitio muy simple (aceptable por el reuso).
- Queda obligado: rutas internas via `import.meta.env.BASE_URL`; cero estilos inline; lockfile multiplataforma al tocar binarios nativos (regla del portfolio, doc 03).

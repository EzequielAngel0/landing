# Pendientes del AGENTE: lo que Claude puede hacer (Landing)

Todo lo que falta y es codigo/config/doc ejecutable por el agente. Contraparte: [`PENDIENTES_DUENO.md`](PENDIENTES_DUENO.md). Actualizado: 2026-07-15.

Leyenda: `[ ]` pendiente · `[wip]` en curso · `[hecho]` · `[gateado]` (necesita antes una accion del dueno).
Regla: cada item en una rama corta -> `develop`; a `main` solo el dueno. Al cerrar: marcarlo aqui + tracker de ronda + doc del area.

## Estado: bootstrap en curso (F1-F3)

- [hecho] Kit de docs redactado (system design + convenciones del portfolio), 2026-07-15
- [wip] Bootstrap arrancado por peticion del dueno (2026-07-16): scaffold Astro + Tailwind, hub con enlaces reales, coleccion legal (Zod) y legales de SoloKey y portfolio, verificado en Podman. CI y despliegue aun pendientes. Ver `rondas/2026-07-16_bootstrap-legales.md`

## Plan por fases (propuesto)

| Fase | Entregable | Verificacion | Estado |
| --- | --- | --- | --- |
| F1 | Bootstrap: Astro 7 + Node 24 + Tailwind 4 + tokens + fuentes + CI + Podman | `build` + `preview` sirven `/`; contenedor igual | `[wip]` (scaffold y Podman hechos; CI pendiente) |
| F2 | Contenido: esquemas Zod (enlaces + legales), home con directorio de enlaces reales | pase de reglas duras en verde (grep) | `[wip]` (coleccion Zod y home con enlaces reales hechos) |
| F3 | Legales: primer par (privacidad + terminos) de la app que decida el dueno | rutas estables + `updatedAt` + sin JS | `[wip]` (SoloKey: privacidad/terminos/eliminacion-datos; portfolio: privacidad/terminos; borradores, pendiente revision del dueno) |
| F4 | SEO + analitica + 404 + sitemap + robots; OG basica | Lighthouse 90+ | `[ ]` |
| F5 | Coordinacion de dominio (raiz) con el portfolio y go-live | GO_LIVE en verde | `[gateado]` (migracion del portfolio, dueno) |

## Gateado por el dueno

| # | Item | Se destraba cuando... |
| --- | --- | --- |
| [gateado] B1 | Contenido de legales | el dueno entregue el inventario de apps y los textos aprobados |
| [gateado] B2 | Toma de la raiz | el dueno planee la migracion del portfolio fuera de la raiz (ADR 0002) |

## Reglas continuas

- Pase de reglas duras (sin em dash, sin emojis) antes de cerrar cada ronda de contenido.
- Lo que se verifica: `build` + `preview` (no solo `dev`), sin JS, Lighthouse.
- Al cerrar cada bloque: tracker de ronda + `CLAUDE.md` + este doc al dia.

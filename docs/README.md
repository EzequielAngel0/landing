# Documentacion: Landing (angelezequiel.dev)

Indice y mapa de toda la documentacion. **Empieza aqui.**

Estado (2026-07-16): bootstrap en curso. Ademas del kit de documentacion, ya existe el scaffold del sitio (Astro + Tailwind, identidad similar al portfolio) con el hub y las primeras paginas legales (SoloKey y portfolio), verificado en Podman. Sin desplegar aun. Ver `rondas/2026-07-16_bootstrap-legales.md`.

## Empieza por aqui

| Si quieres... | Lee |
| --- | --- |
| Entender el producto | [`producto/REQUISITOS.md`](producto/REQUISITOS.md) |
| Entender arquitectura y rumbo | [`arquitectura/SYSTEM_DESIGN.md`](arquitectura/SYSTEM_DESIGN.md) (hub) |
| El modelo de contenido (enlaces + legales) | [`arquitectura/DATOS.md`](arquitectura/DATOS.md) |
| Saber que falta | [`PENDIENTES_AGENTE.md`](PENDIENTES_AGENTE.md) · [`PENDIENTES_DUENO.md`](PENDIENTES_DUENO.md) |
| Que falta para prod | [`operacion/GO_LIVE.md`](operacion/GO_LIVE.md) |
| El porque de cada decision | [`adr/`](adr/) |
| Poner el proyecto a correr (a futuro) | [`proceso/ONBOARDING.md`](proceso/ONBOARDING.md) |
| Un termino que no conoces | [`GLOSARIO.md`](GLOSARIO.md) |

## Estructura

| Carpeta / doc | Que contiene |
| --- | --- |
| `producto/` | Fuente de verdad del producto (que es, roles, flujos, anti-alcance). |
| `arquitectura/` | `SYSTEM_DESIGN.md` (hub) · `DATOS.md` (modelo de contenido: enlaces + legales). |
| `adr/` | Architecture Decision Records (una decision por archivo). |
| `operacion/` | `GO_LIVE.md` · `CUENTAS_SERVICIOS.md` · `RUNBOOK.md` (deploy). |
| `seguridad/` | `SEGURIDAD.md` (superficie y checklist, ligero por ser estatico). |
| `proceso/` | `RAMAS.md` · `PRUEBAS.md` · `ONBOARDING.md`. |
| `futuro/` | `ROADMAP.md` (vision, fases futuras). |
| `rondas/` | Trackers de rondas de trabajo (convencion en su README). |
| `PENDIENTES_AGENTE.md` / `PENDIENTES_DUENO.md` | Backlog vivo, partido por quien ejecuta. |
| `GLOSARIO.md` | Dominio + tecnologias. |

## Relacion con el portfolio

Este proyecto **complementa** al portfolio, no lo reemplaza. La landing toma la raiz del dominio y enlaza al portfolio (que se movera a un subdominio o subruta, decision abierta en [`PENDIENTES_DUENO.md`](PENDIENTES_DUENO.md)). Las convenciones de trabajo (reglas duras de contenido, ramas, commits, ADR, verificacion) se heredan del portfolio para mantener un solo estandar en todo el ecosistema.

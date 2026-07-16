# 0002: Landing en la raiz; portfolio a subdominio o subruta

- **Fecha:** 2026-07-15
- **Estado:** Aceptada (la ubicacion exacta del portfolio es TBD del dueno)

## Contexto

El `System Design 1` pone la landing en la raiz `angelezequiel.dev` y la describe como un directorio que enlaza al "Portfolio" como destino separado. Pero hoy el portfolio ya ocupa la raiz `angelezequiel.dev` (ADR 0007 del portfolio). Hay un conflicto de quien vive en la raiz.

## Decision

La **landing toma la raiz** `angelezequiel.dev` (hub + legales). El **portfolio se mueve** a un subdominio o subruta y sigue como repo y deploy independientes; la landing lo enlaza. Decidido por el dueno el 2026-07-15.

## Alternativas consideradas

- **Landing absorbe al portfolio** (un solo sitio en la raiz): descartada; el dueno prefiere mantenerlos como repos separados.
- **Portfolio se queda en la raiz y la landing va a un subdominio**: descartada; la raiz debe ser el hub ligero de entrada y URL legal estable.

## Consecuencias

- Se gana: raiz ligera y estable para tiendas y para compartir; separacion de responsabilidades (hub vs portafolio profundo).
- Se paga: mover el portfolio de la raiz implica reconfigurar su `site`/base, CNAME y los enlaces internos, y actualizar DNS. Trabajo que ejecuta el dueno/portfolio, no la landing.
- Queda pendiente (TBD del dueno): elegir subdominio (p. ej. `me.`, `www.`) o subruta (`/portfolio/`) para el portfolio, y planear la migracion sin romper enlaces existentes (SEO, canonical, hreflang). Ver [`../PENDIENTES_DUENO.md`](../PENDIENTES_DUENO.md).

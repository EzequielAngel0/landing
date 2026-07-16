# Roadmap: vision y fases futuras (Landing)

Lo que NO es "ahora". Cada item se promueve a `PENDIENTES_AGENTE.md` cuando el dueno lo apruebe.

## Fase siguiente (cuando arranque el desarrollo)

- Bootstrap del sitio y home con directorio de enlaces.
- Primer par de legales (segun inventario de apps del dueno).
- Coordinar con el portfolio la migracion de la raiz (ADR 0002).

## Algun dia / tal vez

- Directorio de proyectos dinamico alimentado por la API de `admin` (en build, no en cliente); requiere ADR nuevo.
- Legales bilingues ES/EN si alguna tienda lo pide.
- Pagina de estado ("status") de las apps del ecosistema.

## Descartado explicitamente (con porque)

- CMS o backend en la landing: el contenido cambia poco y gana de estar en git; el CMS es responsabilidad de `admin` (ADR 0003).
- Absorber el portfolio dentro de la landing: el dueno prefiere repos separados (ADR 0002).

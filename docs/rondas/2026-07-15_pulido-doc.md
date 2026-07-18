# Ronda 2026-07-15 - pulido de la documentacion

Tracker vivo de la ronda de pulido. Alcance acordado con el dueno: precision tecnica mas rellenar huecos, sin reestructurar. Decision de hosting confirmada: se mantiene GitHub Pages.

## Orden de trabajo

Pase de precision sobre la afirmacion de cabeceras (Pages no emite cabeceras propias), documentar la trampa apex mas certificado, neutralizar ejemplos arrastrados del portfolio, y verificar versiones contra el portfolio real.

## Hallazgos y estado

| # | Hallazgo | Accion | Estado |
| --- | --- | --- | --- |
| H1 | La doc decia que CSP/HSTS/nosniff podian ir "via meta o config de Pages"; Pages no emite cabeceras propias y HSTS/nosniff no van por meta | Corregido en SYSTEM_DESIGN §6, SEGURIDAD (checklist mas tabla "Donde vive cada cabecera") y ADR 0004 | [hecho] |
| H2 | Faltaba documentar la trampa del apex proxeado vs el certificado de GitHub | Agregado modo de fallo en RUNBOOK, item en GO_LIVE y consecuencia en ADR 0004 | [hecho] |
| H3 | Ejemplos con slug `solokey` eran arrastre del portfolio (no es app real de la landing; ademas choca con la marca SoloKeys) | Neutralizados a `<app>` en DATOS y RAMAS | [hecho] |
| H4 | Faltaba item del dueno para configurar cabeceras en Cloudflare | Agregada fila en PENDIENTES_DUENO seccion A e items en GO_LIVE | [hecho] |
| H5 | Sospecha de claim de Node inexacto ("Node 24, igual al portfolio") | Verificado contra el portfolio: `.nvmrc` = 24 y Containerfile usa `node:24-slim`; el `engines >=22.12` es solo el piso de compatibilidad. El claim es correcto | [hecho] (verificado, sin cambio) |
| H6 | Regla dura #1 (sin em dash) violada: TODOS los titulos H1 de los docs y el de CLAUDE.md usaban em dash | Reemplazado por dos puntos en los 18 docs mas CLAUDE.md; grep de em dash en `docs/` da 0. Excede la lista de archivos del plan, pero es la regla #1 y es mecanico | [hecho] |

## Decisiones registradas

- Hosting: se mantiene GitHub Pages (patron probado en el portfolio). Cloudflare Pages queda documentada como la alternativa mas fuerte y destino natural si algun dia se unifica el borde en un solo proveedor (ver ADR 0004).
- Ejemplos de app: usar `<app>` como placeholder generico; no hay app real declarada aun (inventario pendiente del dueno, ver PENDIENTES_DUENO seccion C).

## Nits de lint pendientes (opcional, no bloqueante)

- MD040 en el bloque de topologia de SYSTEM_DESIGN (fence sin lenguaje).
- MD022/MD032 en RUNBOOK (encabezados `###` pegados a listas, estilo ya existente del archivo).
- Posible renombre de `kind` del documento legal a `tipo` en DATOS para evitar colision con el `kind` del enlace (sugerencia, no aplicada).

## Cierre

- [hecho] Superado por la ronda siguiente (`2026-07-16_bootstrap-legales.md`): el sitio se construyo y esta en produccion; el merge a main lo autorizo el dueno explicitamente.

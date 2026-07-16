# Datos: modelo de contenido (Landing)

La landing no tiene base de datos. Su "modelo de datos" es el modelo de **contenido**: el directorio de enlaces y los documentos legales, todo versionado en el repo.

## Entidades de contenido

### Enlace (directorio del hub)

Datos tipados (p. ej. `src/data/links.ts`), no base de datos.

| Campo | Tipo | Nota |
| --- | --- | --- |
| `id` | string | identificador estable |
| `label` | string | texto visible (ES/EN si aplica) |
| `href` | string | URL destino (portfolio, github, linkedin, mailto) |
| `kind` | enum | `internal` \| `external` \| `mailto` |
| `order` | number | orden en el directorio |

### Documento legal

Markdown por app e idioma en `src/content/legal/` (colecciones de Astro con esquema Zod).

| Campo (frontmatter) | Tipo | Nota |
| --- | --- | --- |
| `app` | string | slug de la app (define la ruta `/<app>/...`) |
| `kind` | enum | `privacidad` \| `terminos` |
| `locale` | enum | `es` \| `en` (segun decision de idiomas) |
| `title` | string | titulo de la pagina |
| `updatedAt` | date | fecha de ultima actualizacion (se muestra en la pagina) |
| cuerpo | markdown | el texto legal, redactado o aprobado por el dueno |

Ruta resultante: `/<app>/<kind>/` (p. ej. `/<app>/privacidad/`, donde `<app>` es el slug de la app). El par ES/EN, si aplica, se empareja por `app` + `kind`.

## Reglas transversales

- **URL legal estable**: una vez publicada y registrada en una tienda, la ruta `/<app>/<kind>/` no cambia. Renombrar rompe la validacion de la tienda.
- **Fecha visible**: toda pagina legal muestra `updatedAt`.
- **Validacion en build**: el build falla si falta un `kind` requerido para una app, o si un `app`+`kind` existe en un idioma y no en el otro (cuando se decida bilingue).
- **Sin datos inventados**: enlaces reales, textos legales reales.

## Migraciones

No aplica (no hay base de datos). El "historial" de los legales es el historial de git.

## Seeds

No aplica. El contenido inicial es el conjunto de enlaces reales de Angel y los legales de las apps que se decidan primero (ver PENDIENTES_DUENO: inventario de apps).

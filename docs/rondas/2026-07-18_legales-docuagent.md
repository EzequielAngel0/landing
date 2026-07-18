# Ronda 2026-07-18: legales de DocuAgent

Tracker corto. El dueno autorizo revisar `C:\Proyectos\agentes` (DocuAgent, agente RAG del programa de Alura, produccion prevista en `docuagent.angelezequiel.dev`) y subir sus legales a la landing.

## Hallazgos y estado

| # | Tema | Resultado | Estado |
| --- | --- | --- | --- |
| H1 | Fuente de los textos | El dueno YA tenia borradores en `agentes/docs/legal/` (aviso de privacidad LFPDPPP + terminos), fieles al sistema (Cohere, Gemini, Turnstile, OCI, bitacora, cookie de sesion httponly). Se usaron como base, no se redacto desde cero | [hecho] |
| H2 | Placeholders rellenados | Titular: Angel Ezequiel Barbosa Lomeli · domicilio: Jalisco, Mexico · correo: el gmail publico · dominio: `docuagent.angelezequiel.dev` · jurisdiccion: Jalisco · fecha: 2026-07-18. Adaptacion de estilo: sin em dash ni emojis (reglas duras), banner de borrador removido | [hecho] |
| H3 | Conservacion de bitacora | El unico valor decidido por el agente: 12 meses (el ejemplo sugerido en el propio borrador del dueno). CONFIRMAR con el dueno; cambiarlo es editar un Markdown | [ ] (dueno) |
| H4 | i18n | Traducciones EN (Privacy Notice + Terms) con slugs `/en/docuagent/privacy/` y `/en/docuagent/terms/`; par validado en build | [hecho] |
| H5 | Publicacion | El dueno pidio "subir sus legales a la pagina": se interpreta como autorizacion de publicar a produccion (develop -> main), como en D15 de la ronda anterior | [wip] |

## Nota

Los borradores originales en `agentes/docs/legal/` conservan sus placeholders; si el dueno quiere, se actualizan alla tambien (repo aparte, no tocado). El frontend de DocuAgent deberia enlazar a las URLs publicadas: `/docuagent/privacidad/`, `/docuagent/terminos/` (y sus pares EN).

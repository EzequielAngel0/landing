---
app: docuagent
kind: privacidad
locale: es
title: Aviso de Privacidad de DocuAgent
updatedAt: 2026-07-18
---

Este Aviso de Privacidad describe el tratamiento de datos personales de **DocuAgent**, un asistente conversacional que responde preguntas sobre documentación con base en una base de conocimiento provista, disponible en `docuagent.angelezequiel.dev` (en adelante, "el Servicio"). Es un proyecto demostrativo y de portafolio. Marco de referencia: México (LFPDPPP).

## 1. Responsable del tratamiento

Angel Ezequiel Barbosa Lomeli, con domicilio en Jalisco, México, y correo de contacto barbosalomeliangelezequiel@gmail.com, es responsable del tratamiento de sus datos personales conforme a este Aviso.

## 2. Datos personales que recabamos

El Servicio trata las siguientes categorías de datos:

- **De administradores:** correo electrónico y contraseña (almacenada con hash bcrypt, nunca en texto plano) y el factor de autenticación TOTP. Sirven para el acceso al panel de administración.
- **De usuarios del chat:** el **texto de las preguntas** que escribe y las **respuestas** generadas, junto con las **fuentes citadas** y la retroalimentación (útil o no útil), se registran en una bitácora interna con fines de operación y mejora del servicio.
- **Datos técnicos:** dirección **IP** (para límites de uso y protección anti-bot) y una **cookie de sesión** funcional (httponly) para mantener la sesión del administrador. No usamos cookies de publicidad ni de rastreo.

No solicitamos datos personales sensibles. **Recomendación: no incluya datos personales o confidenciales en el texto de sus preguntas.**

## 3. Finalidades del tratamiento

1. Responder consultas sobre la documentación interna (finalidad principal).
2. Autenticar y controlar el acceso de administradores.
3. Seguridad del servicio: prevención de abuso, límites de uso y anti-bot.
4. Mejora del servicio a partir de la retroalimentación (finalidad secundaria).

## 4. Transferencias y encargados (terceros)

Para generar las respuestas, el texto de su consulta y los fragmentos de documentos relevantes se envían a proveedores que actúan como encargados:

- **Cohere:** generación de embeddings y reordenamiento (rerank) del texto.
- **Google (Gemini):** modelo de lenguaje que redacta la respuesta.
- **Cloudflare:** protección anti-bot (Turnstile), túnel y entrega de red.
- **Oracle Cloud Infrastructure (OCI):** hospedaje de la aplicación.

Estos proveedores tratan los datos conforme a sus propias políticas. No vendemos ni comercializamos sus datos personales.

## 5. Conservación

Los registros de la bitácora se conservan durante 12 meses, salvo obligación legal distinta, y luego se eliminan o anonimizan.

## 6. Derechos ARCO

Usted puede **Acceder, Rectificar, Cancelar u Oponerse** al tratamiento de sus datos, así como revocar su consentimiento, enviando una solicitud a barbosalomeliangelezequiel@gmail.com con la información que permita identificarlo y el derecho que desea ejercer. Responderemos en los plazos que marca la ley.

## 7. Uso de cookies

Se utiliza una única cookie de sesión funcional (httponly, secure) necesaria para el inicio de sesión del panel de administración. No se emplean cookies de analítica ni publicidad.

## 8. Cambios al Aviso

Este Aviso puede actualizarse. La versión vigente estará disponible en esta página; la fecha de "Actualizado el" indica la última revisión.

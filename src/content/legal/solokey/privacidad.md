---
app: solokey
kind: privacidad
locale: es
title: Política de Privacidad de SoloKey
updatedAt: 2026-07-16
---

Esta Política de Privacidad describe cómo la aplicación **SoloKey** (en adelante, "la App") trata la información. SoloKey es un gestor de contraseñas **local-first**: tus datos se guardan cifrados en tus propios dispositivos (Android y el companion de escritorio para Windows) y no se envían a ningún servidor del desarrollador ni de terceros.

**Resumen:** SoloKey no tiene cuentas, no usa la nube, no incluye publicidad y no realiza seguimiento. No recopilamos, vendemos ni compartimos tu información personal.

## 1. Responsable

El responsable de la App es Angel Ezequiel Barbosa Lomeli (Jalisco, México). Para cualquier duda sobre esta política puedes escribir a: barbosalomeliangelezequiel@gmail.com.

## 2. Principio local-first: no recopilamos tus datos

La App funciona por completo en tu dispositivo. Las credenciales, contraseñas, notas seguras, claves API, códigos TOTP, llaves SSH y archivos seguros que guardas se almacenan **cifrados localmente** (base de datos SQLite en el dispositivo) y las llaves criptográficas se resguardan en el almacenamiento seguro del sistema operativo (Android Keystore). El desarrollador no tiene acceso a esa información y no la recibe en ningún momento.

## 3. Qué información maneja la App y dónde se guarda

- **Contenido de tu bóveda:** las credenciales y archivos que tú creas. Se cifran con Argon2id y AES-256-GCM y se guardan únicamente en tu dispositivo. Nunca se transmiten al desarrollador.
- **Contraseña maestra y biometría:** tu contraseña maestra se usa para derivar la clave de cifrado y no se almacena en texto claro ni se transmite. La autenticación biométrica la gestiona el sistema operativo; la App nunca accede a tus datos biométricos.
- **Preferencias de la App:** ajustes locales (tema, idioma, tiempos de bloqueo) guardados en el dispositivo.

## 4. Permisos del dispositivo

La App solicita únicamente los permisos necesarios para sus funciones, y solo cuando los usas:

- **Cámara:** para escanear códigos QR (por ejemplo, un secreto TOTP o el emparejamiento de sincronización). Las imágenes se procesan en el momento y no se almacenan ni se envían.
- **Biometría:** para desbloquear la bóveda con huella o rostro, gestionada por el sistema.
- **Notificaciones:** para mostrar avisos locales (por ejemplo, una solicitud de aprobación desde el escritorio). Son notificaciones locales; no se usan servicios de mensajería en la nube.
- **Servicio de autocompletado (Android):** para ofrecerte credenciales en otras apps cuando lo solicites. La App solo entrega la credencial que eliges, tras tu autenticación.

## 5. Sincronización entre dispositivos (opcional)

La sincronización es **opcional** y **punto a punto (P2P)** sobre tu red local. Si la activas, tus dispositivos se emparejan mediante un código QR y se comunican **cifrados de extremo a extremo** (AES-256-GCM). Los datos viajan directamente entre tus dispositivos: no pasan por ningún servidor del desarrollador ni de terceros, y no se almacenan en la nube.

## 6. Verificación de contraseñas filtradas (opcional)

La App incluye una auditoría de seguridad con una función **opcional** que comprueba si una contraseña aparece en filtraciones conocidas, usando el servicio público **Have I Been Pwned** con el método de **k-Anonymity**. Con este método, la App envía únicamente los primeros cinco caracteres del hash SHA-1 de la contraseña; **nunca** se envía tu contraseña ni el hash completo, y el servicio no puede identificar la contraseña ni a ti. Esta comprobación solo ocurre si tú la activas.

## 7. Sin terceros, sin analítica y sin publicidad

La App no integra servicios de analítica, seguimiento, publicidad ni informes de fallos de terceros. No se crean identificadores publicitarios ni perfiles de uso. Fuera de la verificación opcional descrita en la sección 6 y de la sincronización P2P local, la App no realiza conexiones que transmitan tus datos.

## 8. Conservación y eliminación de datos

Como toda la información vive en tu dispositivo, **tú controlas su conservación y eliminación**:

- Puedes borrar credenciales o vaciar la bóveda desde la propia App.
- Al desinstalar la App se elimina su base de datos local y las llaves asociadas del dispositivo.
- No existen datos en servidores del desarrollador, por lo que no hay nada que solicitar borrar de forma remota.

Consulta la página de [Eliminación de datos](/solokey/eliminacion-datos/) para el detalle del procedimiento.

## 9. Seguridad

La App aplica cifrado autenticado AES-256-GCM, derivación de clave Argon2id, bloqueo automático, protección contra fuerza bruta, teclado seguro y protección de pantalla (evita capturas en Android). Ningún sistema es infalible: mantén tu dispositivo actualizado y protege tu contraseña maestra, ya que sin ella no es posible descifrar tu bóveda.

## 10. Menores de edad

La App no está dirigida a menores de edad ni recopila de forma consciente datos de ellos. Al no recopilar datos personales, no se realiza tratamiento dirigido a menores.

## 11. Cambios a esta política

Podemos actualizar esta política para reflejar cambios en la App o en la normativa. La fecha de "Actualizado el" indica la última revisión. Los cambios relevantes se comunicarán en esta misma página.

## 12. Contacto

Para preguntas sobre esta política, escribe a barbosalomeliangelezequiel@gmail.com.

## 13. Ley aplicable

Esta política se rige por la legislación aplicable en los Estados Unidos Mexicanos, incluida, en lo que corresponda, la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.

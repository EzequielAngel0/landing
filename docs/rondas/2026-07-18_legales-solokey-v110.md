# Ronda 2026-07-18: legales de SoloKey al dia con la app 1.1.0

Tracker corto. El dueno autorizo investigar `C:\Proyectos\Flutter\SoloKey` y actualizar sus legales en la landing. Los textos publicados (2026-07-16) quedaron atras respecto a la app: hoy el repo de SoloKey libero la version 1.1.0+2 con licencia MIT y plantillas legales propias en `docs/legal/` que sirvieron de guia.

## Hallazgos y estado

| # | Tema | Resultado | Estado |
| --- | --- | --- | --- |
| H1 | Licencia MIT | La app agrego `LICENSE` MIT (repo publico github.com/EzequielAngel0/SoloKey, verificado con gh). Terminos ES/EN: seccion 2 reescrita (codigo abierto MIT), uso aceptable con clausula de redistribucion, "Propiedad intelectual" pasa a "Distribucion oficial y forks" | [hecho] |
| H2 | Favicons opt-in | `credential_icon.dart` soporta favicons remotos via `google.com/s2/favicons` (viaja solo el dominio), default false y sin caller que lo active hoy. Privacidad ES/EN: seccion nueva "Iconos de sitios (opcional)" declarandolo como funcion desactivada por defecto | [hecho] |
| H3 | Codigo de recuperacion | `RecoveryService`: 32 bytes aleatorios mostrados una vez, solo se guarda hash SHA-256, todo local. Agregado a privacidad (seccion 3) y a terminos (responsabilidad del usuario) | [hecho] |
| H4 | Respaldos .skvault | Export cifrado y respaldo programado a carpeta elegida por el usuario. Privacidad (conservacion), terminos (respaldos) y eliminacion de datos (seccion nueva: los exportados no se borran al desinstalar) | [hecho] |
| H5 | Detalles tecnicos | Sync E2EE precisada como X25519 + AES-256-GCM (verificado en `sync_service.dart`); notificaciones locales ampliadas con recordatorios de rotacion y de respaldo | [hecho] |
| H6 | Validacion | `npm run build` en verde: 20 paginas, pares ES/EN de solokey generados | [hecho] |
| H7 | Publicacion | El dueno autorizo explicitamente el merge y push a `main` en esta ronda: ff `6a707ca..aa34b8b`, deploy de Pages en verde y verificado en produccion (terminos con MIT y fecha 18 de julio, privacy EN con Site icons, eliminacion con skvault). La revision de fondo de los textos sigue pendiente del dueno | [hecho] |

## Nota

Las plantillas del repo SoloKey (`docs/legal/politica_de_privacidad.md`, `terminos_de_uso.md`) conservan sus placeholders y su nota de autor; no se toco ese repo. La landing es la version publicada y rellenada (contacto, jurisdiccion Jalisco). El dueno debe re-revisar los 6 documentos de SoloKey antes de usarlos en fichas de tienda.

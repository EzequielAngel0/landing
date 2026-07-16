# Runbook: operacion dia a dia (Landing)

Sitio estatico: la operacion es basicamente desplegar y vigilar que no haya enlaces rotos.

## Comandos de operacion

| Accion | Comando |
| --- | --- |
| Iterar local | `npm run dev` |
| Verificar de verdad | `npm run build` + `npm run preview` |
| Verificar aislado (Podman) | `podman compose up --build` |
| Desplegar a prod | merge de `develop` a `main` (lo hace el dueno); Actions despliega a Pages |

## Modos de fallo

### El sitio no actualiza tras merge
- **Sintoma:** cambios en `main` no aparecen en `angelezequiel.dev`.
- **Diagnostico:** revisar el run de GitHub Actions (build/deploy) y el estado de Pages.
- **Accion:** re-ejecutar el workflow; verificar `CNAME` y la config de Pages.

### El dominio no resuelve o no hay HTTPS
- **Sintoma:** el dominio no carga o da aviso de certificado.
- **Diagnostico:** revisar DNS en Cloudflare y el estado del certificado en Pages.
- **Accion:** (dueno) verificar registros y activar `Enforce HTTPS` cuando el certificado este emitido.
- **Trampa del apex + proxy de Cloudflare:** si el registro apex esta proxeado (nube naranja), la emision del certificado Let's Encrypt de GitHub puede quedarse atascada, porque Cloudflare intercepta el challenge ACME. Para destrabarla: poner el registro apex en DNS-only (nube gris) hasta que Pages muestre el certificado emitido, y luego reactivar el proxy. Es el mismo patron ya resuelto en el portfolio.

### `www` no redirige
- **Sintoma:** `www.angelezequiel.dev` no manda a la raiz.
- **Accion:** (dueno) revisar la regla 301 en Cloudflare.

## Senales conocidas

- Enlace roto en el directorio o en un legal = revision manual; los legales enlazados desde tiendas no deben cambiar de ruta (ver DATOS y GO_LIVE).

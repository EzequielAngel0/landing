# Cuentas y servicios externos (Landing)

Inventario de lo externo. Sitio estatico: la superficie es minima y no hay llaves de runtime.

| Servicio | Para que | Cuenta/plan | Llave vive en | Si falta... |
| --- | --- | --- | --- | --- |
| GitHub Pages | Hosting del sitio estatico | cuenta del dueno, repo publico | n/a (repo publico) | el sitio no despliega |
| Cloudflare | DNS de `angelezequiel.dev`, 301 `www` -> raiz, analitica sin cookies | cuenta del dueno | token de API solo si se automatiza DNS (no requerido) | sin 301 ni analitica; el sitio sigue en linea via Pages |
| Dominio `angelezequiel.dev` | Raiz publica | registrado por el dueno | registrador | expira el dominio |

## Respaldo de llaves

La landing no usa llaves en runtime. El unico secreto potencial seria un token de API de Cloudflare si se automatiza el DNS; hoy no se necesita. Si se llega a usar, va a un respaldo local FUERA del repo (`C:\Proyectos\landing-keys\` o el vault del dueno), nunca al repo.

## Rotacion

No aplica en la v1 (sin secretos de runtime).

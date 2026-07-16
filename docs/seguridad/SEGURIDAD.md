# Seguridad: plan y checklist (Landing)

Sitio estatico sin backend ni datos de usuario: la superficie de ataque es minima. El foco es integridad del contenido (sobre todo legal), cabeceras y privacidad de la analitica.

## Superficie de ataque

- Expuesto a internet: el sitio estatico servido por GitHub Pages tras Cloudflare.
- No hay: base de datos, login, formularios que envien datos a una API, secretos de runtime.
- Lo mas valioso: la integridad de las paginas legales (deben coincidir con lo aprobado por el dueno) y la disponibilidad de la raiz.

## Checklist base (marcar lo que aplique)

- [ ] Cabeceras de seguridad servidas desde Cloudflare (CSP, HSTS, `X-Content-Type-Options: nosniff`, frame-deny); GitHub Pages no emite cabeceras propias. Ver "Donde vive cada cabecera" abajo
- [ ] Analitica sin cookies (Cloudflare Web Analytics), solo en produccion; sin scripts de terceros que rastreen
- [ ] Enlaces `rel="noopener noreferrer"` en salientes con `target=_blank`
- [ ] Sin secretos en el repo (no hay llaves de runtime; verificar que no se cuele ninguna)
- [ ] Dependencias: Dependabot + auditoria (`npm audit`) verde, como el portfolio
- [ ] `Enforce HTTPS` activo tras emitir el certificado (dueno)
- [ ] Integridad legal: cualquier cambio a un legal pasa por revision del dueno (el historial de git es la evidencia)

## Donde vive cada cabecera

GitHub Pages no permite definir cabeceras HTTP propias, asi que en este stack todas se sirven desde Cloudflare (el borde delante de Pages). Referencia para el bootstrap:

| Cabecera | Donde se configura |
| --- | --- |
| HSTS (`Strict-Transport-Security`) | Cloudflare, SSL/TLS -> Edge Certificates -> HSTS |
| `X-Content-Type-Options: nosniff` | Cloudflare, Rules -> Transform Rules -> Modify Response Header |
| `Content-Security-Policy` | Cloudflare, Transform Rules (response header). Un CSP acotado puede ir por `<meta http-equiv>` como refuerzo, nunca en lugar de la cabecera |
| Frame-deny (`X-Frame-Options` / CSP `frame-ancestors`) | Cloudflare, Transform Rules (response header) |

Notas: valido en plan Free (las Transform Rules de response header y HSTS estan disponibles, con limite de reglas). HSTS y `nosniff` NO se pueden fijar por `<meta>`: exigen cabecera real.

## Hallazgos

| ID | Hallazgo | Severidad | Estado |
| --- | --- | --- | --- |
| (ninguno aun) | | | |

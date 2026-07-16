# GO LIVE: checklist a produccion (Landing)

Leyenda: `[ ]` pendiente · `[wip]` parcial · `[hecho]` · `[dueno]` solo dashboard/infra.

## Principio rector

Prod es la raiz publica `angelezequiel.dev`. La landing es la primera cosa que un reclutador o una tienda ve: debe cargar rapido, verse bien sin JS y no tener enlaces rotos.

## Checklist

- [hecho] Bootstrap del sitio (Astro 7 + Node 24 + Tailwind 4 + tokens + fuentes), 2026-07-16
- [hecho] Home con directorio de enlaces reales (portfolio, GitHub, LinkedIn, X, WhatsApp, correo)
- [hecho] Legales publicados: SoloKey (privacidad, terminos, eliminacion de datos), portfolio y la propia landing (privacidad, terminos), ES/EN. Pendiente la revision de fondo del dueno
- [hecho] Rutas legales estables y con `updatedAt` visible; pares ES/EN validados en build
- [hecho] `[dueno]` DNS en Cloudflare: raiz CNAME a ezequielangel0.github.io (el 301 de www lo maneja GitHub)
- [hecho] `[dueno]` Custom domain + `Enforce HTTPS` configurados en Pages (2026-07-16)
- [hecho] `[dueno]` Certificado del apex emitido (registros en DNS-only, sin trampa de proxy)
- [ ] `[dueno]` Cabeceras de seguridad en Cloudflare (Transform Rules + HSTS): requieren activar el proxy (nube naranja); hoy los registros estan DNS-only (ver SEGURIDAD)
- [hecho] CI/CD: `ci.yml` valida develop; `deploy.yml` construye y despliega a Pages en push a `main`
- [hecho] Migracion coordinada: el portfolio ya vive en `portfolio.angelezequiel.dev` (dueno, 2026-07-16)
- [ ] Lighthouse 90+ (perf, a11y, SEO) y prueba sin JS (medir tras el go-live)
- [ ] Analitica sin cookies (Cloudflare Web Analytics): `[dueno]` crear el sitio en Cloudflare y pasar el token; el agente agrega el beacon solo-produccion
- [hecho] Sitemap + robots.txt con Sitemap + OG basica + canonical + hreflang ES/EN

## Coordinacion critica con el portfolio

La landing y el portfolio no pueden ocupar la raiz al mismo tiempo. El cambio de dominio del portfolio (a subdominio/subruta) y la publicacion de la landing en la raiz deben planearse juntos para no romper enlaces existentes ni el SEO del portfolio (canonical, hreflang, redirects). Es tarea del dueno (ver PENDIENTES_DUENO).

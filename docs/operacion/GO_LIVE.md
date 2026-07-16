# GO LIVE: checklist a produccion (Landing)

Leyenda: `[ ]` pendiente · `[wip]` parcial · `[hecho]` · `[dueno]` solo dashboard/infra.

## Principio rector

Prod es la raiz publica `angelezequiel.dev`. La landing es la primera cosa que un reclutador o una tienda ve: debe cargar rapido, verse bien sin JS y no tener enlaces rotos.

## Checklist

- [ ] Bootstrap del sitio (Astro 7 + Node 24 + Tailwind 4 + tokens + fuentes), como el portfolio
- [ ] Home con directorio de enlaces reales (portfolio, GitHub, LinkedIn, contacto)
- [ ] Al menos el primer par de legales publicado (segun inventario de apps del dueno)
- [ ] Rutas legales estables y con `updatedAt` visible
- [ ] `[dueno]` DNS en Cloudflare: raiz + 301 de `www` -> raiz
- [ ] `[dueno]` `CNAME` en `public/` y `Enforce HTTPS` tras emitir el certificado
- [ ] `[dueno]` Certificado del apex: si el apex esta proxeado, destrabar la emision poniendo el registro en DNS-only hasta que Pages muestre el certificado, luego reactivar el proxy (ver RUNBOOK)
- [ ] `[dueno]` Cabeceras de seguridad en Cloudflare (Transform Rules + HSTS): CSP, `X-Content-Type-Options: nosniff`, frame-deny (ver SEGURIDAD)
- [ ] CI/CD: build + deploy a Pages tras merge a `main`
- [ ] Migracion coordinada: mover el portfolio fuera de la raiz ANTES o A LA VEZ que la landing toma la raiz (evitar que ambos peleen el dominio). Ver ADR 0002
- [ ] Lighthouse 90+ (perf, a11y, SEO) y prueba sin JS
- [ ] Analitica sin cookies (Cloudflare Web Analytics), solo produccion
- [ ] Sitemap + robots.txt + OG basica

## Coordinacion critica con el portfolio

La landing y el portfolio no pueden ocupar la raiz al mismo tiempo. El cambio de dominio del portfolio (a subdominio/subruta) y la publicacion de la landing en la raiz deben planearse juntos para no romper enlaces existentes ni el SEO del portfolio (canonical, hreflang, redirects). Es tarea del dueno (ver PENDIENTES_DUENO).

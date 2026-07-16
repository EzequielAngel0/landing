# 0004: GitHub Pages (repo publico) + Cloudflare (DNS + 301)

- **Fecha:** 2026-07-15
- **Estado:** Aceptada

## Contexto

La landing es estatica y debe estar en la raiz `angelezequiel.dev` con la redireccion `www` -> raiz y analitica sin cookies. El portfolio ya usa este patron (GitHub Pages + Cloudflare + `withastro/action`), probado y sin costo.

## Decision

Desplegar en **GitHub Pages** desde un **repo publico**, con **Cloudflare** como DNS y borde: redireccion 301 estricta de `www.angelezequiel.dev` a la raiz, cache/CDN y analitica sin cookies (Cloudflare Web Analytics). CI/CD con GitHub Actions: build y deploy a Pages tras merge a `main`.

## Alternativas consideradas

- **Cloudflare Pages**: la alternativa mas fuerte, porque ya se usa Cloudflare para DNS y borde. Daria apex nativo y cabeceras/redirects versionados en el repo (`_headers`, `_redirects`), sin la friccion del certificado en el apex. Se descarta por homogeneidad: el portfolio ya despliega en GitHub Pages con `withastro/action`, y mantener un solo pipeline en el ecosistema pesa mas que la ganancia marginal. Queda como destino natural si algun dia se unifica el borde en un solo proveedor.
- **Otro hosting estatico (Netlify, Vercel)**: sin ventaja sobre Pages para este caso, y rompe la homogeneidad con el portfolio.
- **Repo privado**: innecesario; el contenido es publico y un repo publico simplifica Pages. (El admin si es privado; la landing no.)

## Consecuencias

- Se gana: cero costo, mismo pipeline que el portfolio, borde de Cloudflare para 301 y analitica sin cookies.
- Se paga: los limites de Pages (build, tamano), holgados para este sitio. Ademas, Pages no emite cabeceras HTTP propias: CSP, HSTS y `nosniff` se sirven desde Cloudflare (ver [`../seguridad/SEGURIDAD.md`](../seguridad/SEGURIDAD.md)).
- Queda obligado: `CNAME` en `public/`, base en raiz, `trailingSlash: 'always'`, `Enforce HTTPS` activado tras emitir el certificado (accion del dueno en Cloudflare/Pages).
- Trampa del apex: con el apex proxeado por Cloudflare, la emision del certificado de GitHub puede fallar; el procedimiento para destrabarla esta en [`../operacion/RUNBOOK.md`](../operacion/RUNBOOK.md).

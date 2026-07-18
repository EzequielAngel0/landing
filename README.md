# Landing: angelezequiel.dev

Sitio estatico en el apex `angelezequiel.dev`. Es la puerta de entrada: lleva al
portfolio y a las redes de Angel Ezequiel Barbosa Lomeli, y aloja las paginas
legales (privacidad y terminos) de sus apps con URL publica y estable para la
validacion de tiendas.

No es el portfolio (vive en su propio repo) y no tiene backend: todo el contenido
es estatico y vive en el repo.

## Estado

En produccion: [angelezequiel.dev](https://angelezequiel.dev). Hub bilingue (ES/EN)
y paginas legales por app via coleccion de contenido. Toda la documentacion
(producto, arquitectura, decisiones, operacion) esta en [`docs/`](docs/README.md).

## Stack

Astro (SSG), Tailwind CSS 4, TypeScript estricto, fuentes self-hosted. Hosting en
GitHub Pages con Cloudflare para DNS y borde. Detalle en
[`docs/arquitectura/SYSTEM_DESIGN.md`](docs/arquitectura/SYSTEM_DESIGN.md).

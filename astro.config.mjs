import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Landing en el apex angelezequiel.dev, base en raiz.
// trailingSlash 'always': coincide con la salida de Astro y con como Pages
// sirve indices de directorio (evita 301 dispares).
export default defineConfig({
  site: 'https://angelezequiel.dev',
  trailingSlash: 'always',
  // Sitemap plano (sin helper i18n: los slugs EN son localizados, no por
  // prefijo). El emparejado ES/EN lo declaran los hreflang del <head>.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Preview del contenedor accedido por localhost: permitir cualquier host
    // evita "Blocked request" al servir desde Podman.
    preview: {
      allowedHosts: true,
    },
  },
});

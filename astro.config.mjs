import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Landing en el apex angelezequiel.dev, base en raiz.
// trailingSlash 'always': coincide con la salida de Astro y con como Pages
// sirve indices de directorio (evita 301 dispares).
export default defineConfig({
  site: 'https://angelezequiel.dev',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
    // Preview del contenedor accedido por localhost: permitir cualquier host
    // evita "Blocked request" al servir desde Podman.
    preview: {
      allowedHosts: true,
    },
  },
});

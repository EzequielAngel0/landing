# Prompt: interfaz de la landing (angelezequiel.dev)

Prompt corto para arrancar el diseno de la interfaz. Pegar en la herramienta de diseno/UI o pasar al agente de frontend.

## Prompt

Disena la interfaz de una landing estatica y minima para el apex `angelezequiel.dev`. Es la puerta de entrada personal de Angel Ezequiel Barbosa Lomeli: identidad breve y un directorio de enlaces que lleva al portfolio, GitHub, LinkedIn y contacto. Ademas aloja paginas legales (privacidad y terminos) de sus apps.

Identidad visual similar a la del portfolio (hermana), no una identidad ajena: reusa su sistema de diseno (Archivo + IBM Plex Mono + Bebas Neue, tinta azul sobre papel, verde reservado a estado). Direccion sobria, tipografica, de carga instantanea. Nota: ya implementada en el bootstrap; este prompt queda como referencia.

Entrega dos vistas:

1. Home: nombre, una linea de quien es, y directorio de enlaces (portfolio como enlace principal; GitHub, LinkedIn y email como secundarios). Sin scroll largo: cabe en una pantalla.
2. Plantilla legal: pagina de documento legal (titulo, fecha "Actualizado el ...", y cuerpo de texto largo legible), sobria y centrada en la lectura.

Restricciones duras:

- Sin em dash (usa coma, dos puntos, parentesis o ·). Sin emojis.
- Sin glassmorphism: nada de blur de fondo, orbes de gradiente ni particulas.
- Funciona sin JavaScript; el JS solo para tema e idioma.
- Accesible (contraste AA), responsive, con modo claro y oscuro.
- Rapida: fuentes self-hosted (subset latin), cero dependencias pesadas.

Stack de implementacion: Astro (SSG) + Tailwind CSS 4 (tokens con `@theme`) + TypeScript. Propon primero la direccion visual (tipografia, paleta, espaciado, layout) y luego las dos vistas.

## Notas

- Contenido real pendiente (enlaces exactos, textos legales, inventario de apps): usar placeholders claros, sin inventar datos.
- Decisiones abiertas que no bloquean el diseno: ubicacion final del portfolio (subdominio o subruta) e idiomas de los legales. Ver [`PENDIENTES_DUENO.md`](PENDIENTES_DUENO.md).

import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Coleccion de documentos legales por app. Un Markdown por documento en
// src/content/legal/<app>/<kind>.md. El build falla si el frontmatter no
// cumple el esquema (kinds validos, fecha real, etc.).
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    // Slug de la app; define la ruta /<app>/<kind>/.
    app: z.string(),
    kind: z.enum(['privacidad', 'terminos', 'eliminacion-datos']),
    locale: z.enum(['es', 'en']).default('es'),
    title: z.string(),
    // Se muestra como "Actualizado el ..."; se valida como fecha real.
    updatedAt: z.coerce.date(),
  }),
});

export const collections = { legal };

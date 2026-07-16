// Etiquetas, orden y slugs de los documentos legales, compartidos entre el
// home y las rutas. Los slugs ES (app, kind) son la fuente de verdad de la
// coleccion; kindSlugEn localiza la URL inglesa (/en/<app>/<slug>/).

export const appLabels: Record<string, string> = {
  solokey: 'SoloKey',
  portfolio: 'Portfolio',
  landing: 'Este sitio (angelezequiel.dev)',
};

export const appLabelsEn: Record<string, string> = {
  solokey: 'SoloKey',
  portfolio: 'Portfolio',
  landing: 'This site (angelezequiel.dev)',
};

// Orden del listado: primero las apps, el propio sitio al final.
export const appOrder: Record<string, number> = {
  solokey: 0,
  portfolio: 1,
  landing: 2,
};

export const kindLabels: Record<string, string> = {
  privacidad: 'Política de Privacidad',
  terminos: 'Términos y Condiciones',
  'eliminacion-datos': 'Eliminación de datos',
};

export const kindLabelsEn: Record<string, string> = {
  privacidad: 'Privacy Policy',
  terminos: 'Terms and Conditions',
  'eliminacion-datos': 'Data Deletion',
};

// Slug localizado de la ruta EN. La ES conserva el kind tal cual.
export const kindSlugEn: Record<string, string> = {
  privacidad: 'privacy',
  terminos: 'terms',
  'eliminacion-datos': 'data-deletion',
};

export const kindOrder: Record<string, number> = {
  privacidad: 0,
  terminos: 1,
  'eliminacion-datos': 2,
};

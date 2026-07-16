import { getCollection, type CollectionEntry } from 'astro:content';

export type LegalEntry = CollectionEntry<'legal'>;

const key = (e: LegalEntry) => `${e.data.app}/${e.data.kind}`;

// Devuelve los documentos legales de un idioma, validando la regla de DATOS.md:
// cada app+kind debe existir en AMBOS idiomas. Si falta un par, el build falla.
export async function getLegal(locale: 'es' | 'en'): Promise<LegalEntry[]> {
  const all = await getCollection('legal');
  const es = all.filter((e) => e.data.locale === 'es');
  const en = all.filter((e) => e.data.locale === 'en');
  for (const e of es) {
    if (!en.some((x) => key(x) === key(e))) {
      throw new Error(`Falta la version EN del legal ${key(e)}`);
    }
  }
  for (const e of en) {
    if (!es.some((x) => key(x) === key(e))) {
      throw new Error(`Falta la version ES del legal ${key(e)}`);
    }
  }
  return locale === 'es' ? es : en;
}

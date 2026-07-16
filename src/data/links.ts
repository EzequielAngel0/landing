// Directorio de enlaces del hub. Datos tipados, no base de datos.
// Datos reales tomados del portfolio (src/data/site.ts).

export type LinkKind = 'primary' | 'external' | 'mailto';

export interface HubLink {
  id: string;
  label: string;
  labelEn?: string;
  href: string;
  kind: LinkKind;
  note?: string;
  noteEn?: string;
}

export const links: HubLink[] = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: 'https://portfolio.angelezequiel.dev/',
    kind: 'primary',
    note: 'Trabajo técnico y proyectos',
    noteEn: 'Technical work and projects',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/EzequielAngel0',
    kind: 'external',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/angelezequiel',
    kind: 'external',
  },
  {
    id: 'x',
    label: 'X',
    href: 'https://x.com/Ezequiel27Angel',
    kind: 'external',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/523320191633',
    kind: 'external',
  },
  {
    id: 'email',
    label: 'Correo',
    labelEn: 'Email',
    href: 'mailto:barbosalomeliangelezequiel@gmail.com',
    kind: 'mailto',
  },
];

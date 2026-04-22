export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  tag: string;
  tooltip?: string;
}

export const projects: Project[] = [
  {
    id: 'dvge',
    title: 'DVGE: Dynamic Vector Graphics Engine',
    description: 'App v4.1.5 GA para generacion de animaciones vectoriales. Persistencia atómica y sandbox de seguridad.',
    slug: 'dvge',
    tag: 'Inspeccionar Motor'
  },
  {
    id: 'twitter-clone',
    title: 'Clon Arquitectónico de Twitter',
    description: 'El fin de los tiempos de carga. Un estudio sobre escalabilidad Zero-Flicker empleando Node/Express conectado mediante Supabase/Prisma.',
    slug: 'twitter-clone',
    tag: 'Inspeccionar Sistema',
    tooltip: 'UX fluida que elimina los Spinners simulando 0 latencia.'
  }
];

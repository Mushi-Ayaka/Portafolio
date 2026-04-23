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
    description: 'App v5.5.0 para generacion de animaciones vectoriales. Persistencia atomica, sandbox de seguridad y sistema de plugins.',
    slug: 'dvge',
    tag: 'Inspeccionar Motor',
    tooltip: 'Ecosistema en constante desarrollo que integra HTML, CSS, JS y WebGL en una aplicacion de escritorio.',
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

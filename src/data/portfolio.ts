export type ItemLink = { label: string; href: string };

export type Item = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  role?: string;
  cover?: string;
  links?: ItemLink[];
};

export const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Prisma",
  "Vite",
  "Electron",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Express",
];

export const projects: Item[] = [
  {
    id: "twitter-follow-card",
    title: "Twitter / X Follow Card",
    description:
      "Clon de la tarjeta de seguimiento de X (Twitter): frontend en React 19 + Vite, backend Node/Express, datos con Prisma + Supabase y caché con TanStack Query.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "TanStack Query",
    ],
    role: "Full-Stack",
    links: [
      { label: "Demo", href: "https://practica-con-react-client.vercel.app" },
      { label: "Código", href: "https://github.com/Mushi-Ayaka/practica-con-react" },
    ],
  },
  {
    id: "ember-motion-studio",
    title: "Ember Motion Studio",
    description:
      "App de escritorio (Electron) para gráficos y animación de broadcast en vivo, con motor de composición basado en Remotion.",
    tech: ["React", "Electron", "TypeScript"],
    role: "Full-Stack / Desktop",
    links: [{ label: "Landing", href: "https://ember-motion-studio-landing.vercel.app/es/" }],
  },
  {
    id: "dvge",
    title: "Dynamic Vector Graphics Engine (DVGE)",
    description:
      "Motor de gráficos vectoriales dinámicos en C++ con pipeline de composición y sistema de plugins.",
    tech: ["C++"],
    role: "C++ / Graphics",
    links: [
      {
        label: "Código",
        href: "https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-",
      },
    ],
  },
];

export const blogs: Item[] = [];

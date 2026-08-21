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
  {
    id: "mlir-campo-tensorial",
    title: "MLIR de Campo Tensorial",
    description:
      "Pipeline de compilación multi-nivel para imágenes basado en un espacio tensorial T∈N^{H×W×C}. 4 dialectos (GTE, PTR, CTP, TB) con lowering progresivo a formato comprimido lossless. 100% C++17.",
    tech: ["C++"],
    role: "C++ / Compiladores",
    links: [
      { label: "Código", href: "https://github.com/Mushi-Ayaka/MLIR-CampoTensorial" },
    ],
  },
  {
    id: "lenguaje-hermetico",
    title: "Lenguaje Hermético",
    description:
      "Lenguaje de descripción de escenas 3D/4D basado en campos de distancia firmados (SDF): iluminación, materiales PBR, animación y volume rendering sin mallas, solo geometría procedural y álgebra.",
    tech: ["C++"],
    role: "C++ / Lenguajes",
    links: [
      { label: "Código", href: "https://github.com/Mushi-Ayaka/lenguaje-hermetico" },
    ],
  },
  {
    id: "motor-grafico",
    title: "Motor Gráfico",
    description:
      "Motor de renderizado 3D interactivo para escenas SDF con arquitectura de 5 capas. Carga escenas RIH (JSON), ray marching en CPU y visualización Win32 con cámara en tiempo real.",
    tech: ["C++"],
    role: "C++ / Graphics",
    links: [
      { label: "Código", href: "https://github.com/Mushi-Ayaka/motor-grafico" },
    ],
  },
];

export const blogs: Item[] = [];

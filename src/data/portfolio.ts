export type ItemLink = { label: string; href: string };

export type Item = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  role?: string;
  architecture?: string;
  cover?: string;
  detailHref?: string;
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
      "Clon de la tarjeta de seguimiento de X (Twitter) con persistencia real de datos: frontend en React 19 + Vite y backend Node/Express con Prisma + Supabase.",
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
      "CSS",
    ],
    role: "Full-Stack",
    architecture:
      "Fullstack desacoplado: cliente React 19 + Vite y servidor Express 4 con capas controllers/models/routes. Persistencia real en PostgreSQL vía Prisma 7 + Supabase y actualizaciones optimistas con TanStack Query v5 (invalidation). Cubierto por tests con Vitest + Testing Library.",
    detailHref: "/proyectos/twitter-clone",
    cover: "/media/x-follow-card.png",
    links: [
      { label: "Demo", href: "https://practica-con-react-client.vercel.app" },
      { label: "Código", href: "https://github.com/Mushi-Ayaka/practica-con-react" },
    ],
  },
  {
    id: "ember-motion-studio",
    title: "Ember Motion Studio",
    description:
      "Suite de escritorio (Electron + React) para motion design y animación broadcast, impulsada por el puente DVGE: renderizado determinista, flujo Vibe Motion y exportación ProRes 4444 con canal alfa.",
    tech: ["React", "Electron", "TypeScript", "DVGE"],
    role: "Desktop / Engine Integration",
    architecture:
      "App broadcast multi-proceso en Electron (main/renderer) con React + TypeScript sobre el puente DVGE (determinismo fotograma a fotograma). Flujo Vibe Motion (la IA genera el código), sandbox con Shadow DOM + fakeWindow, y auto-descarga de Chromium/FFmpeg para exportar ProRes 4444 + Alpha en OBS, Premiere y After Effects.",
    detailHref: "/proyectos/ember-motion-studio",
    links: [
      { label: "Landing", href: "https://ember-motion-studio-landing.vercel.app/es/" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=2zsTmMPQ9kg" },
      { label: "Código", href: "https://github.com/Mushi-Ayaka/Ember-Motion-Studio" },
    ],
  },
  {
    id: "dvge",
    title: "Dynamic Vector Graphics Engine (DVGE)",
    description:
      "Puente (bridge) headless en TypeScript que conecta tu app o herramienta de diseño con un sandbox de ejecución seguro y determinista para gráficos vectoriales animados. Publicado como @dvge/core en npm (MIT).",
    tech: ["TypeScript", "Shadow DOM", "@dvge/core"],
    role: "TypeScript / Bridge Dev",
    architecture:
      "Bridge headless 100% determinista y por frames: cálculo algebraico de timeline sin reloj del sistema (frame-accurate), sandbox seguro en Shadow DOM para plugins, easing/springs y layout responsive (remapX/remapY). Incluye Knowledge Bridge AI para inyectar contexto a la IA. Código estilo SOLID, publicado como @dvge/core (MIT) en npm.",
    detailHref: "/proyectos/dvge",
    cover: "/media/iconDVGE.png",
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
    architecture:
      "Pipeline de compilación multi-nivel con 4 dialectos por dominio (GTE → PTR → CTP → TB) y lowering progresivo hasta formato comprimido lossless. 100% C++17, sin dependencias de runtime.",
    detailHref: "/proyectos/mlir-campo-tensorial",
    cover: "/media/cover-mlir.svg",
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
    architecture:
      "Lenguaje con compilador propio (lexer, parser, AST, resolver, emisor RIH en JSON, evaluador SDF) y backend de render por ray marching. Escenas 3D/4D por SDF sin mallas, puramente algebraico.",
    detailHref: "/proyectos/lenguaje-hermetico",
    cover: "/media/cover-lenguaje.svg",
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
    architecture:
      "Arquitectura de 5 capas (Visor Win32, Scene con BVH, Render por ray marching en CPU, RHI con DirectX 11 compute shader, OS). Carga escenas RIH (JSON) y renderiza SDF en tiempo real.",
    detailHref: "/proyectos/motor-grafico",
    cover: "/media/cover-motor.svg",
    links: [
      { label: "Código", href: "https://github.com/Mushi-Ayaka/motor-grafico" },
    ],
  },
];

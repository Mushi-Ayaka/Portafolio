import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiVite,
  SiElectron,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiExpress,
  SiCplusplus,
  SiReactquery,
  SiPython,
  SiJson,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Prisma: SiPrisma,
  Vite: SiVite,
  Electron: SiElectron,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,
  Express: SiExpress,
  "C++": SiCplusplus,
  "TanStack Query": SiReactquery,
  Python: SiPython,
};

export function TechIcon({
  name,
  size = 20,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name] ?? SiJson;
  return <Icon size={size} className={className} aria-label={name} role="img" />;
}

import { CaseStudy, CaseTooltip, type Brand } from "@/components/CaseStudy";

const brand: Brand = {
  bg: "#0a0707",
  surface: "#161010",
  primary: "#e44c30",
  accent: "#ff6b4a",
  text: "#fdf2f0",
  muted: "#9a6b63",
  border: "rgba(228,76,48,0.22)",
};

export default function DVGEPage() {
  return (
    <CaseStudy
      brand={brand}
      eyebrow="Caso de Estudio · Motor de Gráficos"
      title="Dynamic Vector Graphics Engine"
      subtitle={
        <>
          Arquitectura de grado broadcast con{" "}
          <strong>
            <CaseTooltip
              term="Determinismo Total"
              definition="Consistencia idéntica de cuadros en cada renderizado."
            />
          </strong>{" "}
          y el nuevo Knowledge Bridge AI.
        </>
      }
      role="Arquitecto de Software & Engine Dev"
      stack="TypeScript · Shadow DOM · Plugins · npm (@dvge/core)"
      links={[
        {
          label: "Descarga (Win x64)",
          href: "https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-/releases/download/v5.8.0/DVGE-Setup-5.8.0.exe",
          primary: true,
        },
        {
          label: "Documentación",
          href: "https://mushi-ayaka.github.io/DVGE-Docs/",
        },
      ]}
      problem={{
        title: "El Caos Temporal",
        body: (
          <>
            Los motores tradicionales dependen de librerías de tiempo real que
            fallan al exportar video cuadro a cuadro: <em>frames</em> saltados y
            desincronización. DVGE resuelve esto con una arquitectura{" "}
            <em>Frame-Math</em> pura que aniquila la deriva temporal.
          </>
        ),
      }}
      solution={{
        title: "Knowledge Bridge AI",
        body: (
          <>
            La v5.5 introduce inyección de contexto nativa. Al arrastrar el PDF
            de reglas del motor a una IA, el asistente comprende al instante las
            restricciones del Shadow DOM y el Sandbox, generando código
            funcional al primer intento.
          </>
        ),
      }}
      video="/media/demoDVGE.mp4"
      gallery={[
        { caption: "Editor de escenas en vivo" },
        { caption: "Plugin Sandbox" },
      ]}
      engineering={{
        title: "Persistencia y Estabilidad (v5.6.0 GA)",
        body: (
          <>
            Subsistema de <em>I/O Atómico Asíncrono</em> para evitar corrupción
            de proyectos. Gestión Integral de Proyectos: renombrado y
            eliminación atómica desde la Galería, Control de Integridad de
            Plugins que bloquea dependencias faltantes, y Auto-Fetch de
            Chromium y FFmpeg que elimina cualquier dependencia del entorno del
            usuario.
          </>
        ),
      }}
    />
  );
}

import { CaseStudy, CaseTooltip, type Brand } from "@/components/CaseStudy";

const brand: Brand = {
  bg: "#050505",
  surface: "#121212",
  primary: "#E44C30",
  accent: "#801C0B",
  text: "#F5F5F4",
  muted: "#A8A29E",
  border: "rgba(228,76,48,0.22)",
};

export default function DVGEPage() {
  return (
    <CaseStudy
      brand={brand}
      eyebrow="Caso de Estudio · Puente de Gráficos"
      title="Dynamic Vector Graphics Engine"
      subtitle={
        <>
          Puente <strong>headless</strong> que conecta tu app o herramienta de
          diseño con un sandbox de ejecución seguro y determinista, con el{" "}
          <strong>
            <CaseTooltip
              term="Knowledge Bridge AI"
              definition="Exportador de contexto nativo: extrae las reglas del canvas y los límites del sandbox en un PDF para entrenar IA externa."
            />
          </strong>
          .
        </>
      }
      role="Arquitecto de Software & Bridge Dev"
      stack="TypeScript · Shadow DOM · Plugins · npm (@dvge/core)"
      links={[
        {
          label: "npm: @dvge/core",
          href: "https://www.npmjs.com/package/@dvge/core",
          primary: true,
        },
        {
          label: "Código (GitHub)",
          href: "https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-",
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
            Introduce inyección de contexto nativa. Al arrastrar el PDF
            de reglas de DVGE a una IA, el asistente comprende al instante las
            restricciones del Shadow DOM y el Sandbox, generando código
            funcional al primer intento.             Se publica como paquete npm:{" "}
            <code>npm install @dvge/core</code>.
          </>
        ),
      }}
      video="/media/demoDVGE.mp4"
      engineering={{
        title: "Persistencia y Estabilidad",
        body: (
          <>
            Subsistema de <em>I/O Atómico Asíncrono</em> para evitar corrupción
            de proyectos. Gestión Integral de Proyectos: renombrado y
            eliminación atómica desde la Galería, y Control de Integridad de
            Plugins que bloquea dependencias faltantes en el sandbox.
          </>
        ),
      }}
    />
  );
}

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

export default function EmberMotionStudioPage() {
  return (
    <CaseStudy
      brand={brand}
      eyebrow="Caso de Estudio · Motion Design Broadcast"
      title="Ember Motion Studio"
      subtitle={
        <>
          Suite de escritorio (<strong>Electron + React</strong>) para motion
          design y animación broadcast,           impulsada por el puente{" "}
          <strong>
            <CaseTooltip
              term="DVGE"
              definition="Dynamic Vector Graphics Engine: puente que conecta la app host con un sandbox de ejecución determinista, fotograma a fotograma."
            />
          </strong>{" "}
          y el flujo <strong>Vibe Motion</strong>.
        </>
      }
      role="Desktop / Engine Integration"
      stack="Electron · React · TypeScript · DVGE Engine"
      links={[
        {
          label: "Landing",
          href: "https://ember-motion-studio-landing.vercel.app/es/",
          primary: true,
        },
        {
          label: "Demo (YouTube)",
          href: "https://www.youtube.com/watch?v=2zsTmMPQ9kg",
        },
        {
          label: "Código",
          href: "https://github.com/Mushi-Ayaka/Ember-Motion-Studio",
        },
      ]}
      problem={{
        title: "El Reto del Broadcast",
        body: (
          <>
            Los gráficos en vivo exigen sincronía <em>frame-perfect</em> y baja
            latencia; las apps web tradicionales no sobreviven a la presión de
            render en tiempo real ni se integran con flujos de producción en
            OBS, Twitch o DaVinci.
          </>
        ),
      }}
      solution={{
        title: "DVGE + Vibe Motion",
        body: (
          <>
            Aplicación multi-proceso en <em>Electron</em> (main/renderer) con
            React + TypeScript sobre el puente <em>DVGE</em>: renderizado
            determinista fotograma a fotograma. El flujo <em>Vibe Motion</em>{" "}
            genera código desde IA, lo pegas en Ember y exportas a{" "}
            <em>ProRes 4444 con canal alfa</em> listo para OBS, Premiere o After
            Effects.
          </>
        ),
      }}
      engineering={{
        title: "Arquitectura Multi-Proceso y Sandbox",
        body: (
          <>
            Separación estricta entre proceso principal y renderer, con canales
            seguros para inyectar escenas en tiempo real. <em>Shadow DOM</em> y
            un proxy <em>fakeWindow</em> aíslan los plugins de terceros del
            sistema host, mientras Chromium y FFmpeg se auto-descargan en el
            primer arranque para cero configuración del entorno.
          </>
        ),
      }}
    />
  );
}

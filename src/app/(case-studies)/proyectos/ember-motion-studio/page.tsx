import { CaseStudy, type Brand } from "@/components/CaseStudy";

const brand: Brand = {
  bg: "#0b0805",
  surface: "#181009",
  primary: "#f59e0b",
  accent: "#f97316",
  text: "#fff7ed",
  muted: "#b08968",
  border: "rgba(245,158,11,0.22)",
};

export default function EmberMotionStudioPage() {
  return (
    <CaseStudy
      brand={brand}
      eyebrow="Caso de Estudio · Broadcast Desktop"
      title="Ember Motion Studio"
      subtitle={
        <>
          App de escritorio para gráficos y animación de broadcast en vivo, con
          un motor de composición basado en <strong>Remotion</strong>.
        </>
      }
      role="Full-Stack / Desktop"
      stack="React · Electron · TypeScript · Remotion"
      links={[
        {
          label: "Landing",
          href: "https://ember-motion-studio-landing.vercel.app/es/",
          primary: true,
        },
      ]}
      problem={{
        title: "El Reto del Broadcast",
        body: (
          <>
            Los gráficos en vivo exigen sincronía <em>frame-perfect</em> y baja
            latencia; las apps web tradicionales no sobreviven a la presión de
            render en tiempo real ni se integran con flujos de producción.
          </>
        ),
      }}
      solution={{
        title: "Composición con Remotion",
        body: (
          <>
            Motor multi-proceso en <em>Electron</em> (main/renderer) con React +
            TypeScript y composición basada en Remotion, permitiendo gráficos de
            broadcast programables y actualizables sin reiniciar la emisión.
          </>
        ),
      }}
      gallery={[
        { caption: "Editor de escenas en vivo" },
        { caption: "Panel de composición" },
      ]}
      engineering={{
        title: "Arquitectura Multi-Proceso",
        body: (
          <>
            Separación estricta entre el proceso principal y el renderer, con
            canales seguros para inyectar escenas y datos en tiempo real,
            manteniendo el hilo de UI libre para una experiencia sin cortes.
          </>
        ),
      }}
    />
  );
}

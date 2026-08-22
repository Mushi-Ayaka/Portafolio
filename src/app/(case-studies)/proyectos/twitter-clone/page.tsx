import { CaseStudy, CaseTooltip, type Brand } from "@/components/CaseStudy";

const brand: Brand = {
  bg: "#ffffff",
  surface: "#f7f9f9",
  primary: "#1d9bf0",
  accent: "#1a8cd8",
  text: "#0f1419",
  muted: "#536471",
  border: "rgba(15,20,25,0.12)",
};

export default function TwitterClonePage() {
  return (
    <CaseStudy
      brand={brand}
      eyebrow="Caso de Estudio · Web Full-Stack"
      title="Twitter / X Follow Card"
      subtitle={
        <>
          Escalabilidad técnica para alcanzar el estado{" "}
          <strong>
            <CaseTooltip
              term="Zero-Flicker UX"
              definition="UX fluida que elimina los spinners simulando 0 latencia."
            />
          </strong>{" "}
          en una red social real.
        </>
      }
      role="Arquitecto Frontend / Backend"
      stack="React 19 · Vite 8 · Node.js · Express 4 · Prisma 7 · Supabase · TanStack Query"
      links={[
        {
          label: "Ver Demo en Vivo",
          href: "https://practica-con-react-client.vercel.app",
          primary: true,
        },
        {
          label: "Código",
          href: "https://github.com/Mushi-Ayaka/practica-con-react",
        },
      ]}
      problem={{
        title: "La Falla Común",
        body: (
          <>
            Al hacer clic en Seguir, una app inexperta sufre de{" "}
            <em>loadings</em> invasivos y pérdida de estado si el usuario
            refresca por accidente. Las arquitecturas básicas rompen la
            inmersión del consumidor con spinners o peticiones mal
            encapsuladas.
          </>
        ),
      }}
      solution={{
        title: "Optimismo Frontend",
        body: (
          <>
            Despedimos en cascada los indicadores de carga. Usando{" "}
            <em>TanStack React Query</em> y concurrencia optimista, la interfaz
            reacciona en estado <em>isPending</em>: al darle clic, ya estás
            siguiendo a la persona instantáneamente mientras el request viaja
            en las sombras para blindar la BD. Si fracasa, se autorevierte sin
            que el cliente lo note.
          </>
        ),
      }}
      video="/media/demo.mp4"
      engineering={{
        title: "Persistencia Bajo Presión",
        body: (
          <>
            En el backend, un clon debe soportar ráfagas transaccionales
            intensas. Supabase es potente, pero sin{" "}
            <em>PGBouncer</em> las reconexiones durante el hot reload agotan el
            límite de conexiones y saturan los túneles. Se mitigó con{" "}
            <em>connection pooling</em> en la capa de datos para dar resistencia
            extrema y evitar bloquear el Node Event Loop al sincronizar
            mutaciones constantes.
          </>
        ),
      }}
    />
  );
}

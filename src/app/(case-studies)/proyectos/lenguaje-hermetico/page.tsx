import { CaseStudy, type Brand } from "@/components/CaseStudy";

const brand: Brand = {
  bg: "#04100b",
  surface: "#0a1f15",
  primary: "#10b981",
  accent: "#34d399",
  text: "#ecfdf5",
  muted: "#6ee7b7",
  border: "rgba(16,185,129,0.22)",
};

export default function LenguajeHermeticoPage() {
  return (
    <CaseStudy
      brand={brand}
      eyebrow="Caso de Estudio · Lenguajes C++"
      title="Lenguaje Hermético"
      subtitle={
        <>
          Lenguaje de escenas 3D/4D por{" "}
          <strong>campos de distancia firmados (SDF)</strong>: iluminación,
          materiales PBR, animación y volume rendering sin mallas.
        </>
      }
      role="C++ / Lenguajes"
      stack="C++17 · Lexer/Parser · Ray Marching · RIH"
      links={[
        {
          label: "Código",
          href: "https://github.com/Mushi-Ayaka/lenguaje-hermetico",
          primary: true,
        },
      ]}
      problem={{
        title: "Geometría sin Mallas",
        body: (
          <>
            El render tradicional de mallas no escala a escenas 4D ni a
            volúmenes; se necesita una representación puramente algebraica y
            procedural.
          </>
        ),
      }}
      solution={{
        title: "Compilador SDF Propio",
        body: (
          <>
            Lexer, parser, AST, resolver y emisor <em>RIH (JSON)</em> con
            evaluador SDF: escenas 3D/4D definidas solo por álgebra, sin
            polígonos.
          </>
        ),
      }}
      gallery={[
        { caption: "Editor de escena SDF" },
        { caption: "Render por ray marching" },
      ]}
      engineering={{
        title: "Backend de Render",
        body: (
          <>
            Ray marching en CPU sobre el espacio SDF, con materiales PBR e
            iluminación evaluados por campo, permitiendo animación 4D en tiempo
            de compilación.
          </>
        ),
      }}
    />
  );
}

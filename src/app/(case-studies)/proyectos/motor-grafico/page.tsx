import { CaseStudy, type Brand } from "@/components/CaseStudy";

const brand: Brand = {
  bg: "#ffffff",
  surface: "#f4f4f5",
  primary: "#111111",
  accent: "#000000",
  text: "#111111",
  muted: "#555555",
  border: "rgba(0,0,0,0.12)",
};

export default function MotorGraficoPage() {
  return (
    <CaseStudy
      brand={brand}
      eyebrow="Caso de Estudio · Gráficos C++"
      title="Motor Gráfico"
      subtitle={
        <>
          Motor de renderizado 3D interactivo para escenas{" "}
          <strong>SDF</strong> con arquitectura de 5 capas y ray marching en
          tiempo real.
        </>
      }
      role="C++ / Graphics"
      stack="C++17 · Win32 · DirectX 11 · Ray Marching"
      links={[
        {
          label: "Código",
          href: "https://github.com/Mushi-Ayaka/motor-grafico",
          primary: false,
        },
      ]}
      gallery={[
        { src: "/media/IMG_20260821_225840_301.jpg", caption: "Muestra de renderizado 1" },
        { src: "/media/IMG_20260821_225840_648.jpg", caption: "Muestra de renderizado 2" },
        { src: "/media/IMG_20260821_225840_873.jpg", caption: "Muestra de renderizado 3" },
      ]}
      problem={{
        title: "Tiempo Real en CPU",
        body: (
          <>
            Renderizar SDF de forma interactiva exige pipelines que no bloqueen
            la cámara ni degraden la escena bajo carga de geometría compleja.
          </>
        ),
      }}
      solution={{
        title: "5 Capas de Arquitectura",
        body: (
          <>
            Visor Win32, Scene con BVH, Render por <em>ray marching</em> en CPU,
            RHI con compute shader de DirectX 11 y capa OS, para escenas RIH en
            tiempo real.
          </>
        ),
      }}
      engineering={{
        title: "Capa RHI y OS",
        body: (
          <>
            Abstracción del hardware gráfico vía DirectX 11 compute shader y una
            capa OS que aísla el visor Win32, logrando 60fps estables en escenas
            SDF complejas.
          </>
        ),
      }}
    />
  );
}

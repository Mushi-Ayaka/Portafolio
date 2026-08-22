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

export default function MLIRCampoTensorialPage() {
  return (
    <CaseStudy
      brand={brand}
      eyebrow="Caso de Estudio · Compiladores C++"
      title="MLIR de Campo Tensorial"
      subtitle={
        <>
          Pipeline de compilación multi-nivel para imágenes sobre un espacio
          tensorial <strong>T ∈ N^(H×W×C)</strong>, con lowering progresivo a
          formato comprimido lossless.
        </>
      }
      role="C++ / Compiladores"
      stack="C++17 · MLIR · Dialectos GTE / PTR / CTP / TB"
      links={[
        {
          label: "Código",
          href: "https://github.com/Mushi-Ayaka/MLIR-CampoTensorial",
          primary: false,
        },
      ]}
      video="/media/mlir-animacion.mp4"
      gallery={[
        { src: "/media/mlir-cuadro-artistico.png", caption: "Cuadro artístico" },
        { src: "/media/mlir-epico-humanoide.png", caption: "Humanoide épico" },
        { src: "/media/mlir-cuadro-realista.png", caption: "Cuadro realista" },
      ]}
      problem={{
        title: "La Explosión del Espacio",
        body: (
          <>
            Representar imágenes como tensores dispara la complejidad de las
            transformaciones; los enfoques naive son lentos y generan formatos
            que no preservan fidelidad.
          </>
        ),
      }}
      solution={{
        title: "4 Dialectos por Dominio",
        body: (
          <>
            Pipeline con <em>GTE → PTR → CTP → TB</em> y lowering progresivo
            hasta un formato comprimido lossless. 100% C++17, sin dependencias
            de runtime.
          </>
        ),
      }}
      engineering={{
        title: "Lowering sin Pérdida",
        body: (
          <>
            Cada dialecto encapsula un dominio; el lowering garantiza que la
            semántica del tensor se preserve a través de las capas hasta el
            formato comprimido final.
          </>
        ),
      }}
    />
  );
}

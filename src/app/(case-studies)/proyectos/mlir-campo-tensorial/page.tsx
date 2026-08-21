import { CaseStudy, type Brand } from "@/components/CaseStudy";

const brand: Brand = {
  bg: "#0a0712",
  surface: "#14102a",
  primary: "#8b5cf6",
  accent: "#a855f7",
  text: "#f5f3ff",
  muted: "#a78bfa",
  border: "rgba(139,92,246,0.22)",
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
          primary: true,
        },
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
      gallery={[
        { caption: "Dialecto GTE" },
        { caption: "Reducción CTP → TB" },
      ]}
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

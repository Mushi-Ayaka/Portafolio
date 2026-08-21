import styles from "./proyectos.module.css";
import { ItemCard } from "@/components/ItemCard";
import { projects } from "@/data/portfolio";

export default function ProjectsIndex() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.h1}>Casos de Estudio</h1>
      <p className={styles.sub}>
        Proyectos con arquitectura real, persistencia de datos y código abierto (MIT).
      </p>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ItemCard key={p.id} item={p} moreHref={`/proyectos/${p.id}`} />
        ))}
      </div>
    </main>
  );
}

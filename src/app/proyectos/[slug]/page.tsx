import styles from "./detail.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TechIcon } from "@/components/TechIcon";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <main className={styles.wrap}>
      <Link href="/proyectos" className={styles.back}>
        ← Volver a Casos de Estudio
      </Link>

      <div className={styles.cover}>
        <span className={styles.coverInitial}>{project.title.charAt(0)}</span>
      </div>

      <div className={styles.head}>
        {project.role && <span className={styles.role}>{project.role}</span>}
        <h1 className={styles.title}>{project.title}</h1>
      </div>

      <p className={styles.desc}>{project.description}</p>

      {project.architecture && (
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>Arquitectura</h2>
          <p className={styles.arch}>{project.architecture}</p>
        </section>
      )}

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Tecnologías</h2>
        <div className={styles.techs}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tech} title={t}>
              <TechIcon name={t} size={20} />
              <span className={styles.techName}>{t}</span>
            </span>
          ))}
        </div>
      </section>

      {project.links && project.links.length > 0 && (
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>Enlaces</h2>
          <div className={styles.links}>
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

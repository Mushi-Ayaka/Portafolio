import styles from "./CaseStudy.module.css";
import type { CSSProperties, ReactNode } from "react";

export type Brand = {
  bg: string;
  surface: string;
  primary: string;
  accent: string;
  text: string;
  muted: string;
  border: string;
};

export type CaseLink = { label: string; href: string; primary?: boolean };

export type CaseStudyProps = {
  brand: Brand;
  eyebrow?: string;
  title: string;
  subtitle: ReactNode;
  role: string;
  stack: string;
  links: CaseLink[];
  problem: { title: string; body: ReactNode };
  solution: { title: string; body: ReactNode };
  video?: string;
  gallery?: { src?: string; caption: string }[];
  engineering: { title: string; body: ReactNode };
};

export function CaseTooltip({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <span className={styles.tooltip} data-tooltip={definition}>
      {term}
    </span>
  );
}

export function CaseStudy({
  brand,
  eyebrow = "Casos de Estudio",
  title,
  subtitle,
  role,
  stack,
  links,
  problem,
  solution,
  video,
  gallery,
  engineering,
}: CaseStudyProps) {
  const vars = {
    "--cs-bg": brand.bg,
    "--cs-surface": brand.surface,
    "--cs-primary": brand.primary,
    "--cs-accent": brand.accent,
    "--cs-text": brand.text,
    "--cs-muted": brand.muted,
    "--cs-border": brand.border,
  } as CSSProperties;

  return (
    <article className={styles.wrap} style={vars}>
      <div className={styles.article}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Rol</span>
              <span className={styles.metaValue}>{role}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Stack</span>
              <span className={styles.metaValue}>{stack}</span>
            </div>
            <div className={styles.links}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={l.primary ? styles.linkPrimary : styles.linkSecondary}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>{problem.title}</h2>
            <p>{problem.body}</p>
          </div>
          <div className={styles.cardHighlight}>
            <h2 className={styles.cardTitle}>{solution.title}</h2>
            <p>{solution.body}</p>
          </div>
        </section>

        <section className={styles.media}>
          {video && (
            <video
              className={styles.video}
              src={video}
              autoPlay
              muted
              loop
              playsInline
            />
          )}
          {gallery && gallery.length > 0 && (
            <div className={styles.gallery}>
              {gallery.map((g, i) =>
                g.src ? (
                  <div className={styles.shot} key={i}>
                    <img src={g.src} alt={g.caption} />
                  </div>
                ) : (
                  <div className={styles.shot} key={i}>
                    <span className={styles.shotPlaceholder}>{g.caption}</span>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        <section className={styles.engineering}>
          <h2>{engineering.title}</h2>
          <p>{engineering.body}</p>
        </section>
      </div>
    </article>
  );
}

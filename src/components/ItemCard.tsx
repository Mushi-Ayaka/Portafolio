import styles from "./ItemCard.module.css";
import { TechIcon } from "./TechIcon";
import Link from "next/link";
import type { Item } from "@/data/portfolio";

export function ItemCard({ item, moreHref }: { item: Item; moreHref?: string }) {
  return (
    <article className={styles.card}>
      {item.role && <span className={styles.role}>{item.role}</span>}

      <div className={styles.cover}>
        {item.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.cover} alt={item.title} />
        ) : (
          <span className={styles.coverInitial}>{item.title.charAt(0)}</span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.desc}>{item.description}</p>

        {item.architecture && (
          <p className={styles.architecture}>
            <span className={styles.archLabel}>Arquitectura</span>
            {item.architecture}
          </p>
        )}

        <div className={styles.techs}>
          {item.tech.map((t) => (
            <span key={t} className={styles.tech} title={t}>
              <TechIcon name={t} size={18} />
            </span>
          ))}
        </div>

        <div className={styles.footer}>
          {item.links && item.links.length > 0 && (
            <div className={styles.links}>
              {item.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          )}
          {moreHref && (
            <Link href={moreHref} className={styles.more}>
              Ver Más...
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

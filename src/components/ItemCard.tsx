"use client";

import styles from "./ItemCard.module.css";
import { TechIcon } from "./TechIcon";
import Link from "next/link";
import type { Item } from "@/data/portfolio";
import { useState } from "react";

export function ItemCard({ item, moreHref }: { item: Item; moreHref?: string }) {
  const [open, setOpen] = useState<"desc" | "arch">("desc");

  return (
    <article className={styles.card}>
      {item.role && <span className={styles.role}>{item.role}</span>}

      <div className={styles.cover}>
        {item.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.cover}
            alt={item.title}
          />
        ) : (
          <span className={styles.coverInitial}>{item.title.charAt(0)}</span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{item.title}</h3>

        {item.architecture && (
          <div className={styles.toggle} role="tablist" aria-label="Secciones de la tarjeta">
            <button
              type="button"
              role="tab"
              aria-selected={open === "desc"}
              className={open === "desc" ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => setOpen("desc")}
            >
              Descripción
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={open === "arch"}
              className={open === "arch" ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => setOpen("arch")}
            >
              Arquitectura
            </button>
          </div>
        )}

        <div className={`${styles.panel} ${open === "desc" ? styles.panelOpen : ""}`}>
          <p className={styles.desc}>{item.description}</p>
        </div>

        {item.architecture && (
          <div className={`${styles.panel} ${open === "arch" ? styles.panelOpen : ""}`}>
            <p className={styles.architecture}>
              <span className={styles.archLabel}>Arquitectura</span>
              {item.architecture}
            </p>
          </div>
        )}

        <div className={styles.techs}>
          {item.tech.map((t) => (
            <span key={t} className={styles.tech} title={t}>
              <TechIcon name={t} size={18} />
            </span>
          ))}
        </div>
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
            Ver Más →
          </Link>
        )}
      </div>
    </article>
  );
}

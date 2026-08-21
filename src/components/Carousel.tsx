"use client";

import { useRef, type ReactNode } from "react";
import styles from "./Carousel.module.css";

export function Carousel({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.btn}
        onClick={() => scroll(-1)}
        aria-label="Anterior"
      >
        &#8249;
      </button>
      <div className={styles.viewport} ref={ref} aria-label={ariaLabel}>
        {children}
      </div>
      <button
        type="button"
        className={styles.btn}
        onClick={() => scroll(1)}
        aria-label="Siguiente"
      >
        &#8250;
      </button>
    </div>
  );
}

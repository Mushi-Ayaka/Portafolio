"use client";

import { useEffect, useRef, type ReactNode } from "react";
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

  // Rueda -> scroll horizontal, pero deja pasar el scroll vertical de la
  // pagina cuando el carrusel ya esta en uno de sus extremos (evita trapar).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const delta =
        Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (delta === 0) return;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return;
      e.preventDefault();
      el.scrollLeft += delta;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

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
      <div
        className={styles.viewport}
        ref={ref}
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            scroll(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            scroll(-1);
          }
        }}
      >
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

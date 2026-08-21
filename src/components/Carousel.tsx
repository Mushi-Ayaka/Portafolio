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

  // Rueda: NO roba el scroll vertical de la pagina. Solo hace scroll
  // horizontal cuando el usuario lo pide explicitamente (Shift+rueda en mouse,
  // o gesto horizontal en trackpad con deltaX).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!e.shiftKey && !horizontal) return;
      const delta = horizontal ? e.deltaX : e.deltaY;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return;
      e.preventDefault();
      el.scrollLeft += delta;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Arrastrar con el mouse (desktop): scroll horizontal al arrastrar.
  // Los listeners de move/up van en window para no depender de pointer
  // capture (asi los clicks en botones internos siguen funcionando).
  // Si hay arrastre, se suprime el click para no abrir "Ver Mas" por error.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;
    const down = (e: PointerEvent) => {
      if (e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.style.scrollSnapType = "none";
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", end);
    };
    const move = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) moved = true;
      if (moved) el.scrollLeft = startScroll - dx;
    };
    const end = () => {
      if (!isDown) return;
      isDown = false;
      el.style.scrollSnapType = "";
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
    };
    const clickGuard = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("click", clickGuard, true);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("click", clickGuard, true);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
    };
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
        data-testid="carousel-viewport"
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

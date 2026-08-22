'use client';

import { TechIcon } from './TechIcon';
import styles from './TechMarquee.module.css';

export function TechMarquee({
  items,
  direction = 'left',
  speed = 35,
}: {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  // Repetir lo suficiente para cubrir pantallas anchas y lograr un bucle perfecto.
  const base = items.length >= 10 ? items : [...items, ...items, ...items];
  const loop = [...base, ...base];

  return (
    <div className={styles.marquee} data-direction={direction} aria-label="Stack de herramientas">
      <div className={styles.track} style={{ animationDuration: `${speed}s` }}>
        {loop.map((s, i) => (
          <div
            className={styles.skillCard}
            key={`${s}-${i}`}
            aria-hidden={i >= base.length}
          >
            <TechIcon name={s} size={30} />
            <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

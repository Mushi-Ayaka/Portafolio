'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/config/projects';
import styles from '@/app/page.module.css';

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <button 
        onClick={prevProject} 
        className={styles.carouselBtn} 
        aria-label="Proyecto anterior"
      >
        &#8592;
      </button>

      <div className={styles.carouselViewport}>
        <Link 
          key={project.id}
          href={`/proyectos/${project.slug}`} 
          className={styles.projectCard}
        >
          <div className={styles.projectInfo}>
            <h3>{project.title}</h3>
            <p>
              {project.description.split('Zero-Flicker').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className={styles.tooltip} data-tooltip={project.tooltip}>
                      Zero-Flicker
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
          <span className={styles.tag}>{project.tag}</span>
        </Link>
      </div>

      <button 
        onClick={nextProject} 
        className={styles.carouselBtn} 
        aria-label="Siguiente proyecto"
      >
        &#8594;
      </button>

      <div className={styles.carouselDots}>
        {projects.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

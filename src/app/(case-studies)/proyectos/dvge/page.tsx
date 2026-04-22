import styles from './dvge.module.css';

export default function DVGEPage() {
  return (
    <article className={styles.article}>

      {/* 1. HERO Y CONTEXTO VITAL */}
      <header className={styles.hero}>
        <h1 className={styles.title}>Dynamic Vector Graphics Engine</h1>
        <p className={styles.subtitle}>Arquitectura de grado broadcast v4.0.0 con <strong><span className={styles.tooltip} data-tooltip="Consistencia idéntica de cuadros en cada renderizado.">Determinismo Total</span></strong> y Sandbox de Seguridad.</p>

        <div className={styles.metaData}>
          <div className={styles.metaInfo}>
            <span><strong>Rol:</strong> Arquitecto de Software & Engine Dev</span>
            <span><strong>Stack:</strong> Electron, React, Remotion, Node.js</span>
          </div>
          
          <div className={styles.buttonGroup}>
            <a
              href="https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-/releases/latest/download/DVGE-Setup-Win.exe"
              target="_blank"
              rel="noopener"
              className={styles.demoLink}
            >
              Descarga Directa (Win x64) ↓
            </a>
            <a
              href="https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-/releases"
              target="_blank"
              rel="noopener"
              className={styles.secondaryLink}
            >
              Ver Todas las Versiones
            </a>
            <span
              className={styles.secondaryLink}
              title="Próximamente"
              style={{ cursor: 'not-allowed', opacity: 0.6 }}
            >
              Página Oficial (Próximamente)
            </span>
          </div>
        </div>
      </header>

      {/* 2. EXPLICACIÓN INMERSIVA (Problema vs Solución) */}
      <section className={styles.gridSection}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>El Caos Temporal</h2>
          <p>
            Los motores de gráficos tradicionales dependen de librerías de tiempo real que fallan al exportar video cuadro a cuadro. El resultado: <em>frames</em> saltados y desincronización. DVGE resuelve esto mediante una arquitectura <strong>Frame-Math</strong> pura que aniquila la deriva temporal.
          </p>
        </div>
        <div className={styles.cardHighlight}>
          <h2 className={styles.cardTitle}>Sandbox Inpenetrable</h2>
          <p>
            Seguridad primero. Se implementó un entorno sellado mediante <strong>fakeWindow</strong> que bloquea el acceso de los plugins a las APIs del sistema host. Los gráficos corren en un aislamiento total, protegiendo la integridad del sistema operativo del usuario.
          </p>
        </div>
      </section>

      <section className={styles.mediaContainer}>
        <video
          className={styles.demoVideo}
          src="/media/demoDVGE.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* 4. CIERRE ARQUITECTONICO I/O */}
      <section className={styles.engineeringSection}>
        <h2>Persistencia</h2>
        <p>
          Para evitar la corrupción de proyectos, el motor utiliza un subsistema de <strong>I/O Atómico Asíncrono</strong>. Cada guardado se realiza en archivos temporales con renombrado seguro, garantizando que un fallo crítico jamás destruya el trabajo del usuario. El software no solo es potente, es resiliente por diseño.
        </p>
      </section>

    </article>
  );
}

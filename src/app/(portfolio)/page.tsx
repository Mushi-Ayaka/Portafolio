import styles from '../page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="focus-group">
      {/* 01. PRESENTACIÓN */}
      <section id="presentacion" className={`snap-section focus-item ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Sobre Mí.</h2>
        <p className={styles.leadText}>
          Soy un Desarrollador Full-Stack especializado en la triada <strong>React, Node.js y Bases de Datos Relacionales</strong>. Mi valor diferencial radica en el rigor técnico: no escribo código guiado por intuición. Desarrollo sistemas web robustos fundamentados en <strong>Design-Driven Development</strong> y <strong>Pruebas Estrictas</strong>, garantizando que rendimiento y escalabilidad coexistan desde el diseño hasta producción.
        </p>
      </section>

      {/* 02. SKILLS */}
      <section id="skills" className={`snap-section focus-item ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Stack de Herramientas</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3>Desarrollo Frontend</h3>
            <p>React 19, Next.js (App Router), Vite, Zustand, TanStack Query y Arquitectura CSS Vanilla.</p>
          </div>
          <div className={styles.skillCard}>
            <h3>Infraestructura Backend</h3>
            <p>Node.js, Express, ORMs pesados (Prisma), PostgreSQL y Supabase.</p>
          </div>
          <div className={styles.skillCard}>
            <h3>Certidumbre Analítica</h3>
            <p>Desarrollo Basado en Especificaciones (SDD), Patrón DTO, Property-Based Testing y Modelado de Amenazas.</p>
          </div>
          <div className={styles.skillCard}>
            <h3>Cultura de Automatización</h3>
            <p>Programación asistida por IA, Versionado Semántico y Despliegues con Cero Downtime.</p>
          </div>
        </div>
      </section>

      {/* 03. FLUJO DE TRABAJO */}
      <section id="flujo" className={`snap-section focus-item ${styles.section}`}>
        <h2 className={styles.sectionTitle}>El Proceso Operativo</h2>
        <ol className={styles.workflowList}>
          <li><strong>Especificación Estricta:</strong> Extraigo, debato y audito las fallas arquitectónicas del requerimiento antes de tocar el teclado.</li>
          <li><strong>Diseño:</strong> Elaboro mapas de interfaces, diseño los esquemas de bases de datos y orquesto la tolerancia a fallos.</li>
          <li><strong>Ejecución (AI-Assisted):</strong> Codifico de manera operativa bajo capas inquebrantables de validación e inyección continua.</li>
          <li><strong>Garantía Total:</strong> Ejecuto escrutinios y aplico auditorías cruzadas. El software que emito sale con su propia bitácora de changelog inmaculada.</li>
        </ol>
      </section>

      {/* 04. PROYECTOS / EVIDENCIAS */}
      <section id="proyectos" className={`snap-section focus-item ${styles.section}`}>
        <h2 className={styles.sectionTitle}>La Evidencia</h2>
        <div className={styles.projectsList}>
          <Link href="/proyectos/twitter-clone" className={styles.projectCard}>
            <div className={styles.projectInfo}>
              <h3>Clon Arquitectónico de Twitter</h3>
              <p>El fin de los tiempos de carga. Un estudio sobre escalabilidad <span className={styles.tooltip} data-tooltip="UX fluida que elimina los Spinners simulando 0 latencia.">Zero-Flicker</span> empleando Node/Express conectado mediante Supabase/Prisma.</p>
            </div>
            <span className={styles.tag}>Inspeccionar Sistema</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

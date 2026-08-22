import styles from '../page.module.css';
import { Carousel } from '@/components/Carousel';
import { ItemCard } from '@/components/ItemCard';
import { TechIcon } from '@/components/TechIcon';
import { skills, projects } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="focus-group">
      {/* CTA Descargar CV - accesible en inicio (móvil/desktop) */}
      <div className={styles.cvCta}>
        <a href="/cv?print=1" target="_blank" rel="noopener noreferrer" className={styles.cvCtaBtn} aria-label="Descargar CV en PDF">
          <span aria-hidden="true">⬇</span> Descargar CV (PDF)
        </a>
      </div>

      {/* 01. PRESENTACIÓN */}
      <section id="presentacion" className={`snap-section focus-item ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Sobre Mí.</h2>
        <p className={styles.leadText}>
          Soy un Desarrollador Web especializado en <strong>React, Node.js y Bases de Datos Relacionales</strong>. Mi valor diferencial radica en el rigor técnico: no escribo código guiado por intuición. Desarrollo sistemas web robustos fundamentados en <strong>Design-Driven Development</strong> y <strong>Pruebas Estrictas</strong>, garantizando que rendimiento y escalabilidad coexistan desde el diseño hasta producción.
        </p>
      </section>

      {/* 02. SKILLS */}
      <section id="skills" className={`snap-section focus-item ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Stack de Herramientas</h2>
        <Carousel ariaLabel="Tecnologías que uso">
          {skills.map((s) => (
            <div key={s} className={styles.skillCard}>
              <TechIcon name={s} size={30} />
              <span>{s}</span>
            </div>
          ))}
        </Carousel>
      </section>

      {/* 03. FLUJO */}
      <section id="flujo" className={`snap-section focus-item ${styles.section}`}>
        <h2 className={styles.sectionTitle}>El Proceso</h2>
        <ol className={styles.workflowList}>
          <li><strong>Especificación Estricta</strong> <em>(entender bien qué se necesita antes de programar)</em>: Extraigo, debato y audito las fallas arquitectónicas del requerimiento antes de tocar el teclado.</li>
          <li><strong>Diseño</strong> <em>(planeo cómo se verá y cómo guardará la información)</em>: Elaboro mapas de interfaces, diseño los esquemas de bases de datos y orquesto la tolerancia a fallos.</li>
          <li><strong>Ejecución (con IA)</strong> <em>(escribo el código con ayuda de IA, pero verificando todo)</em>: Codifico de manera operativa bajo capas inquebrantables de validación e inyección continua.</li>
          <li><strong>Garantía Total</strong> <em>(reviso y compruebo que funcione antes de entregarlo)</em>: Ejecuto escrutinios y aplico auditorías cruzadas. El software que emito sale con su propia bitácora de changelog inmaculada.</li>
        </ol>
      </section>

      {/* 04. PROYECTOS */}
      <section id="proyectos" className={`snap-section focus-item ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Casos de Estudio</h2>
        <Carousel ariaLabel="Proyectos">
          {projects.map((p) => (
            <ItemCard key={p.id} item={p} moreHref={p.detailHref} />
          ))}
        </Carousel>
      </section>
    </div>
  );
}

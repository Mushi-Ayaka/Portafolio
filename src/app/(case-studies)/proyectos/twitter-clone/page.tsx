import styles from './twitter.module.css';

export default function TwitterClonePage() {
  return (
    <article className={styles.article}>

      {/* 1. HERO Y CONTEXTO VITAL */}
      <header className={styles.hero}>
        <h1 className={styles.title}>Twitter Follow Card Clone</h1>
        <p className={styles.subtitle}>Escalabilidad técnica para alcanzar el estado <strong><span className={styles.tooltip} data-tooltip="UX fluida que elimina los Spinners simulando 0 latencia.">Zero-Flicker UX</span></strong>.</p>

        <div className={styles.metaData}>
          <span><strong>Rol:</strong> Arquitecto Frontend/Backend</span>
          <span><strong>Tecnología Vena:</strong> React, Node.js, Prisma, Vercel</span>
          <a 
            href="https://practica-con-react-client.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.demoLink}
          >
            Ver Demo en Vivo →
          </a>
        </div>
      </header>

      {/* 2. EXPLICACIÓN INMERSIVA (Problema vs Solución) */}
      <section className={styles.gridSection}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>La Falla Común</h2>
          <p>
            Al hacer click en un botón de Seguir, una app inexperta sufre de <em>Loadings</em> invasivos y pérdida de estado si el usuario refresca por accidente. Las arquitecturas básicas rompen la inmersión del consumidor al entorpecer con *spinners* o peticiones mal encapsuladas.
          </p>
        </div>
        <div className={styles.cardHighlight}>
          <h2 className={styles.cardTitle}>Optimismo Frontend</h2>
          <p>
            Despedimos en cascada los indicadores de carga. Usando <strong>TanStack React Query</strong> y concurrencia optimista, la Interfaz de Usuario reacciona en estado <strong>isPending</strong>.
            Al darle Clic, visualmente ya estás siguiendo a esta persona instantáneamente. El <em>Request</em> asíncrono viaja en las sombras para blindar la BD. Si fracasa, se autorevierte sin que el cliente sospeche.
          </p>
        </div>
      </section>

      {/* 3. BLOQUE MULTIMEDIA DEMO REAL */}
      <section className={styles.mediaContainer}>
        <video 
          className={styles.demoVideo}
          src="/media/demo.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </section>

      {/* 4. CIERRE ARQUITECTONICO BACKEND */}
      <section className={styles.engineeringSection}>
        <h2>Persistencia Bajo Presión</h2>
        <p>
          En el Backend, un clon necesita soportar ráfagas transaccionales intensas. Inyectar Supabase es poderoso, pero sin <strong>PGBouncer</strong>, el entorno Serverless satura los túneles vacantes haciendo crash bajo Dev <strong>Hot Reloads</strong>. La base fue mitigada en la capa de tunelización, asegurándome de proveer una resistencia extrema y previniendo el agotamiento del Node Event Loop al sincronizar mutaciones constantes.
        </p>
      </section>

    </article>
  );
}

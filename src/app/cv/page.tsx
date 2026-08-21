'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './cv.module.css';
import { siteConfig } from '@/config/site';

// Data from the structured portfolio extracted previously
const cvData = {
  pitch: "Desarrollador Web enfocado en crear y mantener sitios y aplicaciones web con React, Next.js y Node.js. Combino desarrollo frontend moderno con soporte técnico/IT, lo que me permite cubrir tanto la construcción de páginas como el mantenimiento de infraestructura en entornos empresariales, incluidos centros de salud. Aplico buenas prácticas de especificación y pruebas para entregar soluciones estables y escalables.",
  technicalStack: {
    frontend: ["HTML5 / CSS3", "JavaScript", "React 19", "Next.js", "Vite", "Tailwind / CSS Modules", "Zustand", "TanStack Query"],
    backend: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "Supabase"],
    tools: ["Git", "AI-Assisted Development", "Semantic Versioning", "Despliegue en Vercel / Netlify"]
  },
  methodology: [
    { title: "Definición y Especificación", desc: "Extracción de requisitos y flujos de negocio; redacción de especificaciones claras antes de codificar." },
    { title: "Diseño y Arquitectura", desc: "Definición de estructura de componentes, rutas y modelo de datos." },
    { title: "Desarrollo Modular Asistido por IA", desc: "Implementación en módulos con revisión de calidad y buenas prácticas." },
    { title: "Validación y Despliegue", desc: "Pruebas, revisión final, actualización del changelog y versionado semántico." }
  ],
  education: [
    {
      title: "TSU - Informática",
      institution: "Universidad Politécnica Territorial de Caracas Mariscal Sucre",
      date: "2024 - Presente",
      desc: "Caracas, Parroquia San Juan."
    },
    {
      title: "Certificado de Iniciación al Desarrollo con IA",
      institution: "BIG SCHOOL",
      date: "03/2026",
      desc: "Flujo de Trabajo Eficiente con Agentes de IA."
    },
    {
      title: "Bachiller",
      institution: "U.E.N Almirante Brión",
      date: "2019 - 2024",
      desc: "Distrito Capital."
    }
  ],
  projects: [
    {
      title: "Twitter/X Follow Card — Clon Fullstack",
      role: "Lead Developer & Architect",
      desc: "Clon interactivo que replica las tarjetas de seguimiento de Twitter/X con persistencia real de datos y experiencia de usuario fluida sin parpadeos.",
      bullets: [
        "Persistencia real con Prisma y Supabase sobre PostgreSQL, sustituyendo el estado efímero por un flujo de datos en backend.",
        "Actualizaciones optimistas con TanStack Query para una experiencia instantánea y sin parpadeos.",
        "API REST con Node y Express para alternar el estado de seguimiento.",
        "Demo en vivo: https://practica-con-react-client.vercel.app",
        "Código: https://github.com/Mushi-Ayaka/practica-con-react"
      ]
    },
    {
      title: "Ember Motion Studio — App de escritorio",
      role: "Desarrollador Independiente",
      desc: "Software de escritorio de alto rendimiento para gráficos y animaciones profesionales de broadcast, construido con React, Electron y Remotion. Crea, personaliza y exporta gráficos dinámicos con retroalimentación en tiempo real y soporte nativo ProRes 4444 con Alpha.",
      bullets: [
        "Motor de renderizado con Remotion y persistencia atómica resiliente para sesiones largas.",
        "Inspector de propiedades en tiempo real e interfaz bilingüe con sistema de i18n dinámico.",
        "Proyecto Open Source bajo licencia MIT, desarrollado de forma independiente.",
        "Sitio oficial: https://ember-motion-studio-landing.vercel.app/es/"
      ]
    },
    {
       title: "Plan de mantenimiento MERCAL Centro Plaza (2025)",
       role: "Project Manager / Soporte Técnico",
       desc: "Mantenimiento preventivo y correctivo a 10 estaciones de trabajo, logrando 90% de operatividad técnica en un entorno de atención al público.",
       bullets: [
         "Blog del proyecto: https://equiposinformaticosenmercal.blogspot.com/"
       ]
    }
  ]
};

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Link href="/" className={styles.backBtn}>
          ← Volver al Portafolio
        </Link>
        <button onClick={handlePrint} className={styles.printBtnTop}>
          🖨️ Imprimir / Guardar en PDF
        </button>
      </div>

      <div className={styles.cvContainer}>
        {/* Header */}
        <header className={styles.header}>
          {/* FOTO - Debe existir en public/media/profile.jpg */}
          <div style={{ position: 'relative', width: 90, height: 90, flexShrink: 0 }}>
             <Image 
               src="/media/profile.jpg" 
               alt="Jonatan Baron" 
               className={styles.photo}
               width={90}
               height={90}
               priority
               unoptimized
             />
          </div>
          <div className={styles.headerInfo}>
            <h1>{siteConfig.name}</h1>
            <h2>{siteConfig.role}</h2>
            <div className={styles.contact}>
              <span>{siteConfig.contactEmail}</span>
              <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">
                {siteConfig.socialLinks.github.replace('https://', '')}
              </a>
              <a href={siteConfig.portfolioUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.portfolioUrl.replace('https://', '')}
              </a>
              <span>Caracas, Venezuela</span>
            </div>
          </div>
        </header>

        {/* Resumen / Elevator Pitch */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Perfil Profesional</h3>
          <p className={styles.text}>{cvData.pitch}</p>
        </section>

        {/* Proyectos Core */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experiencia Práctica / Case Studies</h3>
          {cvData.projects.map((proj, idx) => (
            <div key={idx} className={styles.jobItem}>
              <div className={styles.jobHeader}>
                <h3>{proj.title}</h3>
                <span>{proj.role}</span>
              </div>
              <div className={styles.jobInfo}>
                <p>{proj.desc}</p>
                {proj.bullets.length > 0 && (
                  <ul className={styles.list}>
                    {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Educación */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Educación & Certificaciones</h3>
          {cvData.education.map((edu, idx) => (
            <div key={idx} className={styles.jobItem} style={{ marginBottom: '1rem' }}>
              <div className={styles.jobHeader}>
                <h3 style={{ fontSize: '1rem' }}>{edu.title}</h3>
                <span>{edu.date}</span>
              </div>
              <div className={styles.jobInfo}>
                <p style={{ margin: 0, fontWeight: 500 }}>{edu.institution}</p>
                <p style={{ fontSize: '0.85rem' }}>{edu.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

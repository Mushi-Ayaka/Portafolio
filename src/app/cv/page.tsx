'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './cv.module.css';
import { siteConfig } from '@/config/site';

// Data from the structured portfolio extracted previously
const cvData = {
  pitch: "Desarrollador Full-Stack especializado en el ecosistema React y Node.js (Next.js, Prisma, PostgreSQL). Mi principal diferenciador es la aplicación de rigor técnico avanzado mediante Spec-Driven Development (SDD) y Property-Based Testing (PBT); construyendo sistemas web robustos y escalables. Aporto estándares de certidumbre estructural desde la especificación arquitectónica del requerimiento hasta el despliegue final.",
  technicalStack: {
    frontend: ["React 19", "Next.js (App Router)", "Vite", "Zustand", "TanStack Query", "CSS Modules"],
    backend: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "Supabase"],
    advanced: ["Spec-Driven Development (SDD)", "Patrón DTO", "Property-Based Testing (PBT)", "Modelado de Amenazas"],
    tools: ["AI-Assisted Software Engineering", "Semantic Versioning", "Changelog Management"]
  },
  methodology: [
    { title: "Definición y Especificación", desc: "Extracción de HU y flujos de negocio. Redacción con sintaxis EARS y PBT." },
    { title: "Diseño Arquitectónico", desc: "Elaboración de Visión y Arquitectura, interfaces y resiliencia." },
    { title: "Desarrollo Modular (AI-Assisted)", desc: "Implementación en subagentes con Filtros de QA y Seguridad Estricto." },
    { title: "Validación y Supervisión", desc: "Revisión arquitectónica final, testing, actualizacion del changelog y versionado." }
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
      title: "Twitter/X Follow Card - Fullstack Clone",
      role: "Lead Developer & Architect",
      desc: "Clon interactivo que replica las tarjetas de seguimiento con persistencia real de datos y optimización UX UX sin parpadeos.",
      bullets: [
        "Migración de estado efímero a backend integrado con Node/Express, Prisma ORM y Supabase (PostgreSQL).",
        "Implementación de PGBouncer para pooling de conexiones para permitir HMR en desarrollo sin cierres.",
        "Experiencia Zero-Flicker con uso de TanStack Query para 'Optimistic Updates' e `isPending`."
      ]
    },
    {
       title: "Plan de mantenimiento MERCAL Centro Plaza (2025)",
       role: "Project Manager",
       desc: "Mantenimiento preventivo y correctivo a 10 estaciones de trabajo, logrando 90% de operatividad técnica.",
       bullets: []
    }
  ]
};

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ backgroundColor: '#222', minHeight: '100vh', padding: '2rem 0' }}>
      <Link href="/" className={styles.backBtn}>
        ← Volver al Portafolio
      </Link>
      
      <div className={styles.cvContainer}>
        {/* Header */}
        <header className={styles.header}>
          {/* FOTO - Debe existir en public/media/profile.jpg */}
          <div style={{ position: 'relative', width: 120, height: 120, flexShrink: 0 }}>
             {/* Using standard img for easier print rendering, could use next/image as well */}
             <img 
               src="/media/profile.jpg" 
               alt="Jonatan Baron" 
               className={styles.photo} 
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
              <span>Caracas, Venezuela</span>
            </div>
          </div>
        </header>

        {/* Resumen / Elevator Pitch */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Perfil Profesional</h3>
          <p className={styles.text}>{cvData.pitch}</p>
        </section>

        {/* Stack Técnico */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Stack Técnico & Competencias</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <p>{cvData.technicalStack.frontend.join(' • ')}</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Backend & Base de Datos</h3>
              <p>{cvData.technicalStack.backend.join(' • ')}</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Ingeniería Avanzada</h3>
              <p>{cvData.technicalStack.advanced.join(' • ')}</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Herramientas y Metodologías</h3>
              <p>{cvData.technicalStack.tools.join(' • ')}</p>
            </div>
          </div>
        </section>

        {/* Metodología */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Metodología de Trabajo (AI-Assisted & SDD)</h3>
          <ul className={styles.list}>
            {cvData.methodology.map((m, idx) => (
              <li key={idx}><strong>{m.title}:</strong> {m.desc}</li>
            ))}
          </ul>
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

      <button onClick={handlePrint} className={styles.printBtn}>
        🖨️ Imprimir / Guardar en PDF
      </button>
    </div>
  );
}

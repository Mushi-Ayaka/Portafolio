"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const SECTIONS = [
  { id: "presentacion", label: "01. Presentación", short: "Inicio" },
  { id: "skills", label: "02. Stack Técnico", short: "Stack" },
  { id: "flujo", label: "03. Metodología", short: "Método" },
  { id: "proyectos", label: "04. Casos de Estudio", short: "Casos" },
];

export function Sidebar() {
  const [active, setActive] = useState("presentacion");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile">
          <h1 className="name">{siteConfig.name}</h1>
          <p className="role">{siteConfig.role}</p>
        </div>

        <nav className="navigation">
          {SECTIONS.map((s) => (
            <Link
              key={s.id}
              href={`/#${s.id}`}
              className={active === s.id ? "active" : ""}
            >
              <span className="nav-full">{s.label}</span>
              <span className="nav-short">{s.short}</span>
            </Link>
          ))}
          <Link href={siteConfig.cvUrl} className="nav-cv">
            CV
          </Link>
        </nav>

        <div className="contact-actions">
          <Link href={siteConfig.cvUrl} className="btn-cv desktop-cv-btn">
            Ver Currículum / Imprimir
          </Link>
          <div className="social-links">
            <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.contactEmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

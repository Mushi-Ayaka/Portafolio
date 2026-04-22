import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile">
          <h1 className="name">{siteConfig.name}</h1>
          <p className="role">{siteConfig.role}</p>
          <Link href={siteConfig.cvUrl} className="btn-cv mobile-cv-btn">Ver Currículum (CV)</Link>
        </div>

        <nav className="navigation">
          <Link href="/#presentacion">01. Presentación</Link>
          <Link href="/#skills">02. Stack Técnico</Link>
          <Link href="/#flujo">03. Metodología</Link>
          <Link href="/#proyectos">04. Case Studies</Link>
        </nav>

        <div className="contact-actions">
          <Link href={siteConfig.cvUrl} className="btn-cv desktop-cv-btn">
            Ver Currículum / Imprimir
          </Link>
          <div className="social-links">
            <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.contactEmail}`} target="_blank" rel="noopener noreferrer">Contacto</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

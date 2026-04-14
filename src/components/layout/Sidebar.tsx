import { siteConfig } from '@/config/site';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile">
          <h1 className="name">{siteConfig.name}</h1>
          <p className="role">{siteConfig.role}</p>
        </div>

        <nav className="navigation">
          <a href="#presentacion">01. Presentación</a>
          <a href="#skills">02. Stack Técnico</a>
          <a href="#flujo">03. Metodología</a>
          <a href="#proyectos">04. Case Studies</a>
        </nav>

        <div className="contact-actions">
          {/* CV oculto temporalmente — descomentar cuando esté listo:
          <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-cv">
            Descargar CV // PDF
          </a>
          */}
          <div className="social-links">
            <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${siteConfig.contactEmail}`}>Contacto</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

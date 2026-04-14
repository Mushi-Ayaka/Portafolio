# Roadmap & Versiones: Portafolio Técnico

La métrica principal de este documento es la velocidad de entrega y el control riguroso del alcance (Scope creep). No hay fechas de entrega explícitas, el objetivo es terminar las fases lo más rápido posible.

## MVP (Objetivo: Hoy)

*El Hub Básico: Operativo, seguro y desplegado.*

- [ ] Setup del proyecto en Next.js (App Router).
- [ ] Configuración inicial estandarizada (ESLint estricto, archivos de configuración base).
- [ ] Implementación de `next.config.js` con CSP restrictivo y variables de seguridad (NFR-SEC-02).
- [ ] Layout Principal (Header, Footer, tipografía base sin flashes UX).
- [ ] Hero Section estática.
- [ ] Despliegue en producción (Vercel/Netlify).

## v1.0 (Objetivo: Miércoles - Entrevista)

*Contenido y Case Studies activos. Impresión inicial Premium.*

- [ ] Parseo y Renderizado de MDX seguros (Implementación del requerimiento NFR-SEC-01).
- [ ] Componentes de UI básicos encapsulados (Tarjetas de Proyecto, Etiquetas).
- [ ] Arquitectura de Transferencia de Datos (Patrón DTO) para asegurar Zero-Leaks entre Back y Front (NFR-SEC-03).
- [ ] "Case Study" escrito y maquetado con imágenes funcionales y URLs de proyectos externos operativos.
- [ ] Animaciones y micro-interacciones (CSS Vanilla Modules).
- [ ] Auditoría de Performance (Cero Cumulative Layout Shift) (NFR-SEC-04 paso CI/CD).

## v2.0 (Objetivo: Futuro / Híbrido)

*Aspiraciones de Freelance y expansión técnica.*

- [ ] Migración de Data Local (MDX) a CMS Headless o Integración con base de datos real (si el scope lo requiere).
- [ ] Internacionalización (i18n).
- [ ] Funciones complejas interactivas (Filtros de búsqueda avanzados en cliente).
- [ ] Modo Oscuro/Claro dinámico (requiere hidratación y scripts intermedios seguros).

# Especificaciones y Requerimientos Base (SDD)

## Contexto Principal

Proyecto: Portafolio Híbrido "Libro Autodesplegable".
Arquitectura de Interfaz: Single Page Experience / Case Studies detallados mediante MDX.
Tecnología Dominante: Next.js (App Router), React 19, Vanilla CSS Modules.

## Historias de Usuario Principales (MVP y v1.0)

- **US-01:** Como usuario, quiero entrar a la página y ver inmediatamente un *Hero* con la propuesta de valor sin retrasos de carga (TBT cero).
- **US-02:** Como reclutador, quiero poder listar los proyectos del autor con filtros estáticos simples y acceso a repositorios/despliegues.
- **US-03:** Como reclutador técnico, quiero entrar al detalle de un "Case Study" donde se explican las decisiones arquitectónicas con limpieza de diseño y legibilidad tipográfica experta.

## Requerimientos No Funcionales (Aprobados por @Cyber-Neo)

Estos NFRs son inquebrantables. Su validación determina la completitud de la tarea:

1. **[NFR-SEC-01] Sanitización de Componentes MDX:** Todo parseo usará un *sandbox* estricto u *Allow-List*. No se confía en código MDX al aire libre.
2. **[NFR-SEC-02] CSP y Headers Ofensivos:** Las alertas tempranas configurarán el `next.config.js` inyectando directivas restrictivas de Content Security Policy (`default-src 'self'`).
3. **[NFR-SEC-03] Zero-Leak Data (Dto):** Entre RSC y Client Components, la data se debe transformar con Patrón DTO. Prohibidos los pases de objetos de metadata *crudos* hacia el Front.
4. **[NFR-SEC-04] Auditoría de Dependencias Creadas:** Parada técnica ante vulns. Ejecución de de escaneo (`npm audit --audit-level=critical`) forzada en pipeline/Build de Next.js.

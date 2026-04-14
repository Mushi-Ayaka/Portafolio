# Plan de Tareas (MVP - Setup y Seguridad Base)

Este documento rige la implementación de la Fase 1 (MVP) basándose rigurosamente en las Especificaciones de Arquitectura (Cyber-Neo) y el Marco de Validación (Vasilyu QA).

Ningún paso se marcará como completado a menos que los tests de validación estén en verde.

## Fase 1: Andamiaje y Herramientas (QA Harness)

- [ X ] Tarea 1.1: Inicializar el proyecto Next.js (App Router, React 19, TypeScript, **sin** Tailwind) en la raíz mediante `create-next-app` parametrizado.
- [ X ] Tarea 1.2: Instalar y configurar **Vitest** y la librería **`fast-check`** para Property-Based Testing (Unit/PBT).
- [ X ] Tarea 1.3: Instalar y configurar **Playwright** para las suites End-to-End (E2E).
- [ X ] Tarea 1.4: Actualizar el script `build` en el `package.json` para antecederlo con `npm audit --audit-level=critical || exit 1` (QA-Gate-02).

## Fase 2: Implementación TDD/SDD (Pruebas Primero)

- [ X ] Tarea 2.1: **[TEST]** Crear archivo `/tests/e2e/setup.spec.ts` con aserciones para CSP restrictivo, `nosniff`, `DENY`, y ausencia de header `X-Powered-By`.
- [ X ] Tarea 2.2: **[TEST]** Añadir a `/tests/e2e/setup.spec.ts` la aseveración de cero errores o *warnings* en consola durante primer render e hidratación.
- [ X ] Tarea 2.3: **[TEST]** Crear suite PBT en `/tests/unit/dto.pbt.test.ts` inyectando propiedades aleatorias malignas para validar que la función DTO jamás filtre datos no declarados en producción.

## Fase 3: Resolución e Implementación

- [ X ] Tarea 3.1: **[CODE]** Configurar `next.config.js` (`poweredByHeader: false` y array de aserciones CSP).
- [ X ] Tarea 3.2: **[CODE]** Crear el archivo utilitario `src/lib/dtos/caseStudyDto.ts` (o similar) con TypeScript, implementando el parseo puro que filtre lo no expuesto.
- [ X ] Tarea 3.3: Ejecutar `npm run test:unit` y `npm run test:e2e`. Ambas suites deben ponerse en verde.

---
**Meta:** Una vez finalizado el checklist, la arquitectura base se considera sólida e impenetrable según las directivas actuales.

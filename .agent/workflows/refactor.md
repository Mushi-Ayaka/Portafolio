---
description: >
  Workflow de modo intermedio para refactoring. Actívate con el comando /refactor.
  Genera únicamente un tasks.md con PBT obligatorio para cambios de limpieza en código existente, sin el flujo completo de especificaciones.
---

# Workflow: `/refactor` — Modo Intermedio

## Activación

Este workflow se activa cuando el usuario ejecuta `/refactor`.

---

## Alcance permitido

El modo `/refactor` está **estrictamente limitado** a:

- Limpieza de código (dead code, código duplicado, nombres confusos)
- Refactoring estructural (extraer funciones, reorganizar módulos, mejorar legibilidad)
- Mejoras de rendimiento sin cambio de comportamiento observable
- Actualización de dependencias sin cambio de API

**No está permitido** en este modo:

- Implementar nuevas funcionalidades
- Corregir bugs (incluso si se detectan durante el refactoring)
- Cambiar interfaces públicas o contratos de API

---

## Paso 1: Exploración del workspace

Antes de generar el plan, explora el workspace para identificar el alcance del refactoring:

1. Lista los archivos relevantes para el cambio propuesto.
2. Identifica dependencias entre los archivos afectados.
3. Presenta al usuario un resumen del alcance:
   > "Identifico los siguientes archivos para el refactoring: [lista]. ¿Es correcto el alcance o quieres ajustarlo?"

---

## Paso 2: Generación de `tasks.md`

Genera el archivo `.agent/specs/{feature-name}/tasks.md` (o usa un nombre descriptivo del refactoring) con:

1. Tareas de refactoring incrementales y reversibles.
2. **Tareas de PBT obligatorias** para verificar no-regresión: por cada módulo o función refactorizada, incluye una subtarea de test de propiedad que verifique que el comportamiento observable no cambió.
3. Checkpoints entre grupos de cambios relacionados.

Formato de las tareas PBT de no-regresión:
```
- [ ]* N.M Escribir property test de no-regresión para [componente]
  - Verificar que el comportamiento observable de [función/módulo] es idéntico antes y después del refactoring
  - Propiedad: para cualquier entrada válida, el output del código refactorizado debe ser equivalente al output del código original
```

---

## Paso 3: Checkpoint de aprobación

Presenta el `tasks.md` al usuario:

> "He generado el plan de refactoring con [N] tareas y [M] tests de no-regresión. ¿Lo apruebas o tienes correcciones?"

- Si el usuario rechaza: incorpora el feedback y regenera antes de continuar.
- Si el usuario aprueba: continúa al Paso 4.

**No ejecutes ningún cambio en el código antes de recibir aprobación explícita.**

---

## Paso 4: Ejecución del refactoring

1. Ejecuta las tareas del `tasks.md` en orden.
2. Tras completar cada tarea:
   - Actualiza el `tasks.md` marcando la tarea como `[x]` de forma atómica.
   - **Checkpoint por tarea**: solicita confirmación del usuario antes de continuar.
     > "Completé [tarea N]. ¿Continúo con la siguiente?"

---

## Manejo de solicitudes fuera de alcance

Si durante la sesión el usuario solicita una nueva funcionalidad o corrección de bug:

1. **No implementes el cambio**.
2. Informa al usuario:
   > "Esa solicitud está fuera del alcance del modo `/refactor`. Las nuevas funcionalidades requieren el workflow `/spec` y las correcciones de bugs requieren la metodología de condición de bug. ¿Quieres cambiar de modo?"
3. Si el usuario confirma el cambio de modo:
   - Para nueva funcionalidad: inicia el workflow `/spec`.
   - Para bugfix: inicia la metodología de condición de bug.
4. Si el usuario prefiere continuar en modo `/refactor`: ignora la solicitud fuera de alcance y continúa con las tareas pendientes.

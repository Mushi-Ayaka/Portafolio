# Rule: Cláusula de Escape por Trivialidad

Esta rule está activa de forma global en todas las conversaciones. Define los criterios de clasificación trivial/complejo y el comportamiento de escape para evitar sobrecarga de proceso en cambios simples.

---

## Criterios de Trivialidad

Una tarea es **trivial** únicamente si cumple **los cuatro criterios simultáneamente**:

1. **Un único archivo**: el cambio afecta a un solo archivo del workspace
2. **Sin modificación de interfaces públicas**: no cambia firmas de funciones, tipos exportados, APIs ni contratos visibles desde fuera del módulo
3. **Sin nuevas dependencias**: no requiere instalar, importar ni referenciar ninguna librería o módulo nuevo
4. **Menos de 10 líneas**: el cambio completo es realizable en menos de 10 líneas de código (adiciones + eliminaciones)

Si **cualquiera** de los cuatro criterios no se cumple, la tarea es **compleja**.

---

## Comportamiento para Tareas Triviales

Cuando clasifiques una tarea como trivial:

1. **Propón la solución directamente en el chat** con el diff o fragmento de código correspondiente.
2. **Explica brevemente** los criterios que determinaron la clasificación como trivial (ej. "Afecta solo a `config.ts`, no modifica interfaces, no requiere dependencias nuevas, el cambio son 3 líneas").
3. **Espera confirmación explícita** del usuario antes de aplicar el cambio.
4. **No crees** la carpeta `.agent/specs/` ni ningún documento de especificación (`requirements.md`, `design.md`, `tasks.md`).

---

## Comportamiento para Tareas Complejas

Cuando clasifiques una tarea como compleja (no trivial):

1. **No apliques ningún cambio de código**.
2. **Inicia el flujo estructurado** del Requisito 1: pregunta al usuario si es un bugfix o una nueva feature.
3. Sigue el proceso completo de especificación antes de escribir código.

---

## Corrección de Clasificación por el Usuario

Si el usuario discrepa con tu clasificación:

- **Acepta la clasificación indicada por el usuario** sin resistencia.
- **Ajusta el flujo de trabajo** en consecuencia: si el usuario dice que es trivial cuando tú la clasificaste como compleja, propón la solución directa; si dice que es compleja cuando tú la clasificaste como trivial, inicia el flujo estructurado.
- No es necesario justificar ni defender tu clasificación original.

---

## Ejemplos de Clasificación

| Tarea | Trivial | Razón |
|-------|---------|-------|
| Corregir un typo en un comentario | ✅ Sí | 1 archivo, sin interfaces, sin deps, 1 línea |
| Cambiar el color de un botón en CSS | ✅ Sí | 1 archivo, sin interfaces, sin deps, 1-2 líneas |
| Añadir un campo opcional a un formulario | ❌ No | Puede modificar interfaces (tipo del formulario) |
| Refactorizar una función en múltiples archivos | ❌ No | Afecta múltiples archivos |
| Instalar una nueva librería de validación | ❌ No | Requiere nueva dependencia |
| Reescribir la lógica de autenticación | ❌ No | Modifica interfaces públicas, múltiples archivos, >10 líneas |

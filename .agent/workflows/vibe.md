---
description: >
  Workflow de modo rápido. Actívate con el comando /vibe.
  Suspende las restricciones del flujo estructurado para la conversación actual, permitiendo iterar y explorar ideas libremente.
---

# Workflow: `/vibe` — Modo Rápido

## Activación

Este workflow se activa cuando el usuario ejecuta `/vibe`.

---

## Comportamiento al activarse

Al recibir `/vibe`:

1. Confirma al usuario que el modo rápido está activo:
   > "Modo rápido activado. Las restricciones del flujo estructurado están suspendidas para esta conversación. Puedes escribir código directamente sin generar especificaciones previas."
2. Suspende las restricciones de la rule `structured-development.md` para la conversación actual.
3. No solicites clasificación de trabajo, ni generación de specs, ni checkpoints de confirmación.

---

## Recordatorio persistente

**Al inicio de cada respuesta** mientras el modo `/vibe` esté activo, incluye el siguiente aviso al comienzo de tu mensaje:

> ⚡ **Modo rápido activo** — el flujo estructurado está desactivado en esta sesión.

Este recordatorio debe aparecer en todas las respuestas, sin excepción, hasta que el modo sea desactivado.

---

## Reactivación del modo estructurado

Si el usuario ejecuta `/spec` durante una sesión `/vibe`:

1. Desactiva el modo rápido inmediatamente.
2. Elimina el recordatorio de modo rápido de las respuestas.
3. Reactiva las restricciones de `structured-development.md`.
4. Retoma el flujo estructurado desde el inicio: clasificación del trabajo (bugfix vs. feature).
5. Confirma al usuario:
   > "Modo estructurado reactivado. Volvemos al flujo completo de especificaciones."

---

## Restricciones que permanecen activas en modo `/vibe`

Las siguientes restricciones **no se suspenden** en modo rápido:

- Nunca generar código malicioso o inseguro.
- Nunca exponer información sensible (credenciales, PII, etc.).
- Respetar las restricciones de seguridad del workspace.

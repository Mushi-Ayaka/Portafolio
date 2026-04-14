---
name: structured-workflow
description: >
  Actívate cuando el usuario exprese intención de crear, implementar, desarrollar,
  construir, corregir o diseñar cualquier funcionalidad de software. Inicia el flujo
  estructurado de clasificación, especificación y checkpoints antes de escribir código.
---

# Skill: Flujo de Trabajo Estructurado

Cuando esta Skill se activa, debes seguir el proceso disciplinado descrito a continuación antes de proponer cualquier implementación.

## Paso 0: Cláusula de Escape por Trivialidad

Antes de iniciar el flujo completo, evalúa si la tarea es trivial. Una tarea es trivial **solo si cumple los cuatro criterios simultáneamente**:

1. Afecta a un único archivo
2. No modifica interfaces públicas
3. No requiere nuevas dependencias
4. El cambio es completable en menos de 10 líneas de código

- Si la tarea **es trivial**: propón la solución directamente en el chat con el diff o fragmento de código correspondiente. Explica brevemente por qué la clasificaste como trivial. Espera confirmación del usuario antes de aplicar el cambio. No crees carpeta `.agent/specs/` ni ningún documento de especificación.
- Si la tarea **no es trivial**: continúa con el Paso 1.
- Si el usuario discrepa con tu clasificación: acepta la clasificación indicada por el usuario y ajusta el flujo en consecuencia.

## Paso 1: Clasificación inicial del trabajo

Pregunta al usuario:

> "¿Estás trabajando en un **bugfix** o en una **nueva feature**?"

- Si es **bugfix**: inicia directamente la metodología de condición de bug (bug condition methodology) sin solicitar elección de flujo.
- Si es **nueva feature**: continúa con el Paso 2.
- Si el usuario no especifica: solicita la clasificación nuevamente antes de continuar.

## Paso 2: Elección del punto de partida (solo para features)

Pregunta al usuario:

> "¿Quieres comenzar con **Requirements** o con **Technical Design**?"

Delega el flujo completo al workflow `/spec`. Sigue las instrucciones de ese workflow para el resto del proceso.

## Redacción de Criterios de Aceptación (EARS)

Al documentar requisitos, **todos los criterios de aceptación deben seguir el formato EARS**. Consulta la referencia completa en:
`.agent/skills/structured-workflow/references/ears-patterns.md`

Patrones obligatorios:
- `WHEN [condición] THE [actor] SHALL [acción]`
- `IF [condición] THEN THE [actor] SHALL [acción]`
- `WHILE [estado] THE [actor] SHALL [acción]`
- `THE [actor] SHALL [acción]` (requisito incondicional)

Ningún criterio de aceptación debe estar redactado en lenguaje libre sin estructura EARS.

## Property-Based Testing (PBT)

Al definir criterios de aceptación, incluye propiedades PBT como parte del proceso:

- Para **parsers o serializadores**: incluye obligatoriamente una propiedad de round-trip (parsear → serializar → parsear produce resultado equivalente al original).
- Para **transformaciones de datos**: incluye al menos una propiedad de invariante (algo que no cambia tras la transformación) o metamórfica (relación entre dos ejecuciones con entradas relacionadas).
- Para **cualquier función o módulo crítico**: incluye al menos una propiedad PBT verificable.

Documenta las propiedades PBT en la sección de criterios de aceptación del `requirements.md` usando formato EARS.

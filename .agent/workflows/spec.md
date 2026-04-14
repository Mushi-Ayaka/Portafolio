---
description: >
  Workflow de modo estructurado completo. Actívate con el comando /spec [nombre-feature].
  Guía al usuario a través del flujo completo: clasificación → especificación → diseño → plan de tareas → implementación con checkpoints.
---

# Workflow: `/spec` — Modo Estructurado Completo

## Activación

Este workflow se activa cuando el usuario ejecuta `/spec` o `/spec [nombre-feature]`.

---

## Paso 0: Reanudación de sesión interrumpida

Antes de iniciar el flujo, verifica si existe un `tasks.md` con tareas parcialmente completadas para la feature indicada:

- Si existe `.agent/specs/{feature-name}/tasks.md` con tareas marcadas como `[x]` y otras como `[ ]`:
  - Informa al usuario: "Encontré progreso previo en esta feature. La última tarea completada fue [X]. ¿Quieres continuar desde ahí?"
  - Si el usuario confirma: retoma desde la primera tarea pendiente `[ ]`.
  - Si el usuario prefiere empezar de cero: continúa con el Paso 1.

---

## Paso 1: Nombre de la feature

- Si el usuario ejecutó `/spec [nombre-feature]`: usa ese nombre como `{feature-name}` para la carpeta de especificaciones.
- Si el usuario ejecutó `/spec` sin nombre: solicita el nombre antes de continuar.
  > "¿Cuál es el nombre de la feature? (usa formato kebab-case, ej. `mi-nueva-feature`)"

---

## Paso 2: Context Pinning

Busca automáticamente en el workspace archivos cuyo nombre o contenido esté relacionado con el nombre de la feature:

1. Presenta al usuario la lista de archivos encontrados con una breve descripción de su relevancia.
2. Permite que el usuario añada o excluya archivos del contexto activo.
3. Si no encuentras archivos relacionados: notifica al usuario y continúa sin contexto previo.
   > "No encontré archivos relacionados con '{feature-name}' en el workspace. El diseño se realizará desde cero."

Mantén los archivos identificados en contexto activo durante toda la sesión y referenciarlos en las sugerencias técnicas.

---

## Paso 3: Clasificación inicial del trabajo

Pregunta al usuario:

> "¿Estás trabajando en un **bugfix** o en una **nueva feature**?"

- **Bugfix**: inicia directamente la metodología de condición de bug (bug condition methodology). No solicites elección de flujo.
- **Nueva feature**: continúa con el Paso 4.
- **Sin respuesta clara**: solicita la clasificación nuevamente antes de continuar.

---

## Paso 4: Elección del punto de partida (solo para features)

Pregunta al usuario:

> "¿Quieres comenzar con **Requirements** o con **Technical Design**?"

- **Requirements**: ve al Paso 5a.
- **Technical Design**: ve al Paso 5b (análisis de impacto primero).

---

## Paso 5a: Generación de `requirements.md`

1. Crea la carpeta `.agent/specs/{feature-name}/` si no existe.
2. Genera el archivo `.agent/specs/{feature-name}/requirements.md` con:
   - Introducción del feature
   - Requisitos en formato user story con criterios de aceptación EARS
   - Propiedades PBT integradas en los criterios de aceptación (round-trip para parsers, invariantes para transformaciones)
3. **Checkpoint 1**: presenta el documento al usuario.
   > "He generado el `requirements.md`. ¿Lo apruebas o tienes correcciones?"
   - Si el usuario rechaza: incorpora el feedback y regenera antes de continuar.
   - Si el usuario aprueba: actualiza `tasks.md` marcando esta tarea como `[x]` y continúa al Paso 5b.

---

## Paso 5b: Análisis de Impacto Pre-Diseño

Antes de generar el `design.md`:

1. Explora el workspace y lista los archivos existentes relacionados con la feature.
2. Presenta al usuario la lista con una breve descripción del tipo de cambio esperado en cada archivo (Creación / Modificación / Eliminación).
3. Permite que el usuario corrija o añada archivos a la lista.
4. Si no encuentras archivos relacionados: informa al usuario que el diseño se realizará desde cero y solicita confirmación antes de continuar.

---

## Paso 6: Generación de `design.md`

1. Genera el archivo `.agent/specs/{feature-name}/design.md` con:
   - Visión general y arquitectura
   - Componentes e interfaces
   - Modelos de datos
   - Propiedades de corrección
   - Manejo de errores
   - Estrategia de testing
   - **Sección "Archivos Impactados"** con la tabla de archivos identificados en el Paso 5b
2. Referencia los archivos en contexto activo (context pinning) al generar las secciones técnicas.
3. **Checkpoint 2**: presenta el documento al usuario.
   > "He generado el `design.md`. ¿Lo apruebas o tienes correcciones?"
   - Si el usuario rechaza: incorpora el feedback y regenera antes de continuar.
   - Si el usuario aprueba: actualiza `tasks.md` marcando esta tarea como `[x]` y continúa al Paso 7.

---

## Paso 7: Generación de `tasks.md`

1. Genera el archivo `.agent/specs/{feature-name}/tasks.md` con:
   - Plan de implementación incremental
   - Tareas granulares que referencian requisitos específicos
   - Subtareas de PBT por cada propiedad definida en los criterios de aceptación
   - Checkpoints en puntos clave del plan
2. **Checkpoint 3**: presenta el documento al usuario.
   > "He generado el `tasks.md`. ¿Lo apruebas o tienes correcciones?"
   - Si el usuario rechaza: incorpora el feedback y regenera antes de continuar.
   - Si el usuario aprueba: continúa al Paso 8.

---

## Paso 8: Ejecución del plan de implementación

1. Ejecuta las tareas del `tasks.md` en orden.
2. Tras completar cada tarea:
   - Actualiza el `tasks.md` marcando la tarea como `[x]` de forma atómica (exactamente una tarea por checkpoint).
   - **Checkpoint por tarea**: solicita confirmación del usuario antes de continuar con la siguiente.
     > "Completé la tarea [N]. ¿Continúo con la siguiente?"
3. Si el usuario solicita código sin especificaciones previas durante la ejecución: recuérdale el flujo estructurado y ofrece generarlas primero.

---

## Comportamiento ante `/spec` durante sesión `/vibe`

Si el usuario ejecuta `/spec` durante una sesión activa de `/vibe`, reactiva el modo estructurado y retoma el flujo desde el Paso 3 (clasificación inicial).

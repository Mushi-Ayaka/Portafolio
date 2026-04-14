# Referencia de Patrones EARS

**EARS** (Easy Approach to Requirements Syntax) es un conjunto de patrones para redactar criterios de aceptación verificables y sin ambigüedad.

---

## Patrones Fundamentales

### 1. WHEN — Evento disparador

Describe un comportamiento que ocurre en respuesta a un evento específico.

**Sintaxis:** `WHEN [evento/condición] THE [actor] SHALL [acción]`

**Ejemplos:**
- `WHEN el usuario ejecuta /spec, THE Agent SHALL iniciar el flujo de clasificación inicial.`
- `WHEN el Agent completa la generación de requirements.md, THE Agent SHALL solicitar confirmación explícita del usuario antes de continuar.`
- `WHEN el Agent clasifica una tarea como trivial, THE Agent SHALL proponer la solución directamente en el chat con el diff correspondiente.`

---

### 2. IF — Condición opcional

Describe un comportamiento que solo aplica bajo una condición específica.

**Sintaxis:** `IF [condición] THEN THE [actor] SHALL [acción]`

**Ejemplos:**
- `IF el usuario no especifica el tipo de trabajo, THEN THE Agent SHALL solicitar la clasificación nuevamente antes de continuar.`
- `IF el usuario rechaza el contenido de un documento en un checkpoint, THEN THE Agent SHALL incorporar el feedback y regenerar el documento antes de continuar.`
- `IF el Agent no encuentra archivos relacionados en el workspace, THEN THE Agent SHALL notificar al usuario y continuar el flujo sin contexto previo.`

---

### 3. WHILE — Estado continuo

Describe un comportamiento que se mantiene activo durante un estado prolongado.

**Sintaxis:** `WHILE [estado activo] THE [actor] SHALL [acción]`

**Ejemplos:**
- `WHILE el modo /vibe está activo, THE Agent SHALL recordar al usuario al inicio de cada respuesta que el modo estructurado está desactivado.`
- `WHILE el Agent ejecuta el plan de implementación, THE Agent SHALL mantener el tasks.md sincronizado con el estado real de cada tarea completada.`
- `WHILE el modo /refactor está activo, THE Agent SHALL restringir el alcance del trabajo a limpieza y refactoring.`

---

### 4. THE — Requisito incondicional

Describe un comportamiento que siempre debe cumplirse, sin condición previa.

**Sintaxis:** `THE [actor] SHALL [acción]`

**Ejemplos:**
- `THE Skill SHALL residir en .agent/skills/structured-workflow/SKILL.md con frontmatter YAML válido.`
- `THE Agent SHALL crear un archivo tasks.md en .agent/specs/{feature-name}/ con el plan de implementación antes de escribir código.`
- `THE Rule SHALL instruir al Agent para que use user stories con criterios de aceptación en EARS para documentar requisitos.`

---

## Propiedades PBT en Formato EARS

Las propiedades de Property-Based Testing también se expresan en formato EARS para mantener consistencia.

### Round-trip (para parsers y serializadores)

Describe que parsear y luego serializar (o viceversa) produce un resultado equivalente al original.

**Patrón:** `FOR ANY [entrada válida], WHEN [parsear/serializar] THE [resultado] SHALL ser equivalente al original tras [operación inversa].`

**Ejemplo:**
- `FOR ANY documento JSON válido, WHEN el parser lo procesa y el serializador lo convierte de vuelta, THE resultado SHALL ser semánticamente equivalente al documento original.`

---

### Invariante (para transformaciones de datos)

Describe una propiedad que no cambia tras la transformación.

**Patrón:** `FOR ANY [entrada válida], WHEN [transformación] THE [propiedad] SHALL mantenerse igual antes y después de la transformación.`

**Ejemplo:**
- `FOR ANY lista de tareas, WHEN el Agent actualiza el estado de una tarea en tasks.md, THE número total de tareas SHALL mantenerse igual antes y después de la actualización.`

---

### Metamórfica (para transformaciones de datos)

Describe una relación entre dos ejecuciones con entradas relacionadas.

**Patrón:** `FOR ANY [par de entradas relacionadas], WHEN [misma operación aplicada a ambas], THE [relación entre resultados] SHALL mantenerse.`

**Ejemplo:**
- `FOR ANY dos nombres de feature distintos, WHEN el Agent genera las rutas de specs para ambos, THE rutas generadas SHALL ser distintas y seguir el patrón .agent/specs/{nombre}/.`

---

## Reglas de Uso

1. **Todos** los criterios de aceptación deben usar uno de los cuatro patrones EARS.
2. **Ningún** criterio puede estar redactado en lenguaje libre sin estructura EARS.
3. La palabra `SHALL` es obligatoria en todos los criterios — indica un requisito mandatorio.
4. Para requisitos deseables (no mandatorios) se puede usar `SHOULD`, pero con moderación.
5. Las propiedades PBT deben documentarse en la sección de criterios de aceptación del `requirements.md`, no en una sección separada.

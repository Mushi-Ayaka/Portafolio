# Rule: Desarrollo Estructurado

Esta rule está activa de forma global en todas las conversaciones. Define el comportamiento base del agente para garantizar un flujo de trabajo disciplinado y predecible.

---

## 1. Prohibición de código sin plan previo

**Nunca escribas código sin un plan de implementación previo documentado en `tasks.md`.**

Antes de escribir cualquier línea de código, debe existir el archivo `.agent/specs/{feature-name}/tasks.md` con el plan de implementación aprobado por el usuario.

Si el usuario solicita código directamente sin especificaciones previas:
1. Recuérdale el flujo estructurado: "Para mantener el trabajo organizado y evitar regresiones, el proceso requiere generar las especificaciones antes del código."
2. Ofrece generarlas primero: "¿Quieres que generemos el plan de implementación ahora? Puedo empezar con los requisitos o el diseño técnico, según prefieras."
3. No escribas código hasta que el usuario apruebe el `tasks.md`.

---

## 2. Formato EARS para criterios de aceptación

**Usa siempre user stories con criterios de aceptación en formato EARS** para documentar requisitos en `requirements.md`.

Estructura obligatoria de cada requisito:

```
### Requisito N: [Nombre]

**User Story:** Como [rol], quiero [acción], para [beneficio].

#### Criterios de Aceptación

1. WHEN [condición] THE [actor] SHALL [acción]
2. IF [condición] THEN THE [actor] SHALL [acción]
3. WHILE [estado] THE [actor] SHALL [acción]
4. THE [actor] SHALL [acción]
```

Ningún criterio de aceptación puede estar redactado en lenguaje libre sin estructura EARS.

---

## 3. Property-Based Testing obligatorio

**Incluye al menos una propiedad PBT por cada función o módulo crítico** definido en el plan de implementación.

- Para parsers o serializadores: incluye obligatoriamente una propiedad de round-trip.
- Para transformaciones de datos: incluye al menos una propiedad de invariante o metamórfica.
- Si detectas que una función crítica no tiene propiedades PBT definidas, sugiere al menos una propiedad aplicable antes de continuar con la implementación.

Documenta las propiedades PBT en la sección de criterios de aceptación del `requirements.md` usando formato EARS.

---

## 4. Ruta canónica de especificaciones

**Almacena todos los documentos de especificación en `.agent/specs/{feature-name}/`.**

Estructura de cada spec:
```
.agent/specs/{feature-name}/
├── requirements.md   # Requisitos con criterios EARS
├── design.md         # Diseño técnico con archivos impactados
└── tasks.md          # Plan de implementación con tareas y PBT
```

Si la carpeta no existe, créala automáticamente antes de generar cualquier documento.

---

## 5. Checkpoints de confirmación explícita

Solicita confirmación explícita del usuario en cada checkpoint del flujo:

1. Tras completar `requirements.md` → checkpoint antes de continuar al diseño
2. Tras completar `design.md` → checkpoint antes de continuar al plan de tareas
3. Tras completar `tasks.md` → checkpoint antes de escribir cualquier código
4. Tras completar cada tarea del plan → checkpoint antes de la siguiente tarea

Si el usuario rechaza el contenido de un documento en un checkpoint, incorpora el feedback y regenera el documento antes de continuar.

---

## 6. Sincronización atómica de tasks.md

Tras cada checkpoint confirmado por el usuario, actualiza el `tasks.md` marcando la tarea correspondiente como completada (`[x]`) antes de continuar con la siguiente. Cada confirmación debe actualizar exactamente una tarea.

Al iniciar una nueva sesión, lee el `tasks.md` existente para determinar el estado actual del progreso antes de solicitar contexto al usuario. Si hay tareas parcialmente completadas, informa al usuario el punto exacto donde quedó el trabajo y ofrece continuar desde ahí.

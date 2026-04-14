# Manual Operativo: Mantenimiento y Autodespliegue

Este Portafolio fue diseñado usando la arquitectura **Content-As-Code**. Esto significa que *no necesitas saber programar en React ni tocar la base de datos* para actualizar tu portafolio; todo está guiado por archivos de texto estáticos y el motor de Vercel hará el resto automáticamente.

## 1. Actualización de Datos de Perfil y Enlace a CV

Toda tu información general, enlaces a redes sociales o a la versión pública más actualizada de tu **CV en PDF/Drive**, vive en un solo lugar.

1. Abre el archivo: `src/config/site.ts`.
2. Edita los valores dentro de las comillas. Ejemplo:

   ```typescript
   export const siteConfig = {
     name: "Jonatan Baron",
     role: "Software Engineer",
     cvUrl: "https://drive.google.com/tu-link-actualizado",
     socialLinks: {
       github: "https://github.com/...",
       linkedin: "https://linkedin.com/..."
     }
   }
   ```

3. Guarda el archivo.

## 2. Agregar un Nuevo Caso de Estudio (Proyecto Documentado)

Si terminaste un proyecto nuevo y quieres subir evidencias (Fotos, videos, GIFs):

1. **Añadir Multimedia:** Pon tus imágenes o videos en la carpeta `public/media/`. Ejemplo: `public/media/nuevo-proyecto-demo.mp4`.
2. **Crear el Documento:** Ve a la carpeta `content/proyectos/` y crea un archivo con el nombre de tu proyecto seguido de `.mdx` (Ej. `nuevo-proyecto.mdx`).
3. **Escribir Contenido (Plantilla MDX):**
   Copia y pega la siguiente estructura en tu nuevo archivo `.mdx`:

   ```mdx
   ---
   title: "Mi Proyecto Interesante"
   date: "2024-04-14"
   role: "Arquitecto Backend"
   tag: "Fullstack"
   repoUrl: "https://github.com/..."
   ---

   # El Problema
   Aquí escribes qué estaba mal y por qué lo hiciste.

   # La Solución
   Aquí explicas de manera técnica cómo lo abordaste.

   ## Evidencia
   <video src="/media/nuevo-proyecto-demo.mp4" controls autoplay loop />
   ```

## 3. Disparar el Auto-Deploy en Vercel

Dado que el proyecto original se enlaza a tu repositorio central en GitHub, Vercel tiene activado el pipeline de *Continuous Deployment (CD)*. Todo lo que tienes que hacer para que los cambios se reflejen al público es subirlos a tu rama principal (`main` o `master`).

**Secuencia de Comandos en Terminal:**

```bash
# 1. Agrega todos los cambios (tus textos nuevos, tus GIFs, tus actualizaciones de CV)
git add .

# 2. Confirma los cambios con un mensaje claro (Sugerencia: Usa Conventional Commits)
git commit -m "docs: actualizar enlace al curriculum y añadir nuevo case study"

# 3. Envía los cambios a GitHub
git push origin HEAD
```

**Listo.** Al segundo en que ejecutas el `push`, Vercel lee el nuevo *commit*, ejecuta los filtros de seguridad, compila tus nuevos archivos MDX de forma blindada, y en menos de 20 segundos tu portafolio en vivo tiene tu información más reciente, sin que tú tengas que tocar el servidor jamás.

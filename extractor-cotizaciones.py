import os

# --- CONFIGURACIÓN DE RUTAS ---
# Ruta de tu proyecto de Cotizaciones
ROOT_DIR = r"C:\Users\Evo-minidesk\Desktop\Cotizaciones"

# Archivo de salida (se guardará en el escritorio)
OUTPUT_FILE = r"C:\Users\Evo-minidesk\Desktop\cotizaciones_dump.md"

# Exclusiones (Carpetas o archivos que NO queremos leer)
EXCLUDED_PATHS = [
    os.path.join(ROOT_DIR, "node_modules"),
    os.path.join(ROOT_DIR, ".next"),        # Build de Next.js
    os.path.join(ROOT_DIR, ".git"),         # Git history
    os.path.join(ROOT_DIR, ".vscode"),      # Config de VSCode
    os.path.join(ROOT_DIR, "package-lock.json"),
    os.path.join(ROOT_DIR, "yarn.lock"),
    os.path.join(ROOT_DIR, "pnpm-lock.yaml"),
    os.path.join(ROOT_DIR, "README.md"),
    os.path.join(ROOT_DIR, ".env.local"),   # Omitir secretos
]

def is_excluded(path):
    """
    Verifica si una ruta debe ser excluida según la lista de exclusiones.
    """
    try:
        # Normalizamos las rutas para evitar errores en Windows
        path = os.path.normpath(path)
        return any(os.path.commonpath([path, os.path.normpath(ex)]) == os.path.normpath(ex) for ex in EXCLUDED_PATHS)
    except ValueError:
        return False

def is_binary_file(file_path):
    """
    Determina si un archivo es binario (imágenes, pdfs, ejecutables).
    """
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(1024)
        return b'\0' in chunk
    except Exception:
        return True

def build_sitemap_and_extract(root_dir):
    """
    Construye el sitemap del proyecto y extrae contenido de archivos de texto.
    """
    result_lines = []
    sitemap_lines = []
    file_sections = []

    print(f"📂 Escaneando proyecto en: {root_dir}...")

    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Filtrar directorios excluidos para que os.walk no entre en ellos
        # Modificamos la lista 'dirnames' in-place
        dirnames[:] = [d for d in dirnames if not is_excluded(os.path.join(dirpath, d))]

        if is_excluded(dirpath):
            continue

        # Estructura del árbol (sitemap)
        level = dirpath.replace(root_dir, '').count(os.sep)
        indent = '    ' * level
        folder_name = os.path.basename(dirpath) or os.path.basename(root_dir)
        sitemap_lines.append(f"{indent}- **{folder_name}/**")

        for file in filenames:
            file_path = os.path.join(dirpath, file)
            
            if is_excluded(file_path):
                continue

            sitemap_lines.append(f"{indent}    - {file}")

            # Leer contenido del archivo si no es binario
            if is_binary_file(file_path):
                content = "[Archivo binario omitido (Imagen/Font/etc)]"
            else:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                except Exception as e:
                    content = f"[Error al leer archivo: {e}]"

            # Crear ruta relativa para el encabezado del markdown
            relative_path = os.path.relpath(file_path, root_dir)
            
            # Detectar extensión para el bloque de código
            _, ext = os.path.splitext(file)
            lang = ext.lstrip('.') if ext else 'txt'
            if lang in ['js', 'jsx', 'ts', 'tsx']: lang = 'typescript'
            if lang == 'json': lang = 'json'
            
            file_sections.append(f"\n\n---\n\n### `{relative_path}`\n```{lang}\n{content}\n```")

    # Ensamblar el resultado final
    result_lines.append(f"# 🎥 PROYECTO: MAC ESTUDIOS (Cotizaciones)\n")
    result_lines.append("## 📁 Estructura de Archivos (Sitemap)\n")
    result_lines.extend(sitemap_lines)
    result_lines.append("\n\n## 📄 Código Fuente Completo\n")
    result_lines.extend(file_sections)

    return '\n'.join(result_lines)

if __name__ == "__main__":
    if os.path.exists(ROOT_DIR):
        output = build_sitemap_and_extract(ROOT_DIR)
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as out_file:
            out_file.write(output)
        
        print(f"\n✅ ¡Listo! Archivo generado exitosamente en:")
        print(f"👉 {OUTPUT_FILE}")
        print("Ahora puedes subir este archivo a Cursor o Gemini.")
    else:
        print(f"❌ Error: La carpeta no existe: {ROOT_DIR}")
        print("Verifica que la ruta sea correcta.")
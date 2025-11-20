import os

# ==========================================
# CONFIGURACIÓN
# ==========================================

# Detectamos automáticamente la ruta al Escritorio del usuario actual
USER_DESKTOP = os.path.join(os.path.expanduser("~"), "Desktop")

# Ruta de la carpeta objetivo y archivo de salida
ROOT_DIR = os.path.join(USER_DESKTOP, "Cotizaciones")
OUTPUT_FILE = os.path.join(USER_DESKTOP, "reporte_cotizaciones.md")

# 1. EXCLUSIONES DE CARPETAS (Por nombre exacto)
EXCLUDED_DIRS = [
    ".git", "node_modules", "__pycache__", ".DS_Store", "venv", ".env", ".idea", ".vscode"
]

# 2. EXCLUSIONES DE ARCHIVOS POR EXTENSIÓN (Imágenes, Videos, Binarios)
# Estos archivos NO mostrarán su contenido en el reporte.
IGNORED_EXTENSIONS = {
    # Imágenes
    '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg', '.ico', '.webp', '.tiff',
    # Video / Audio
    '.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.mp3', '.wav', '.ogg',
    # Documentos / Binarios
    '.pdf', '.exe', '.dll', '.bin', '.zip', '.rar', '.7z', '.tar', '.gz', '.iso',
    # Diseño
    '.psd', '.ai', '.sketch', '.fig'
}

# ==========================================
# FUNCIONES
# ==========================================

def is_dir_excluded(path):
    """Verifica si el path contiene alguna carpeta prohibida."""
    parts = path.split(os.sep)
    return any(ex in parts for ex in EXCLUDED_DIRS)

def is_ignored_extension(filename):
    """Verifica si el archivo tiene una extensión que debemos omitir."""
    _, ext = os.path.splitext(filename)
    return ext.lower() in IGNORED_EXTENSIONS

def is_binary_file(file_path):
    """Chequeo final de seguridad para detectar binarios no listados."""
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(1024)
        return b'\0' in chunk
    except Exception:
        return True

def get_file_language(filename):
    """Define el lenguaje para el coloreado de sintaxis en Markdown."""
    ext = filename.split('.')[-1].lower() if '.' in filename else ''
    mapping = {
        'py': 'python', 'js': 'javascript', 'ts': 'typescript', 'jsx': 'javascript',
        'html': 'html', 'css': 'css', 'scss': 'css', 'json': 'json',
        'md': 'markdown', 'sql': 'sql', 'sh': 'bash', 'bat': 'batch',
        'xml': 'xml', 'yaml': 'yaml', 'yml': 'yaml'
    }
    return mapping.get(ext, 'text')

def build_sitemap_and_extract(root_dir):
    if not os.path.exists(root_dir):
        return f"Error: La carpeta no existe en: {root_dir}"

    result_lines = []
    sitemap_lines = []
    file_sections = []

    print(f"🔍 Explorando: {root_dir} ...")

    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Filtrar carpetas excluidas para no entrar en ellas
        dirnames[:] = [d for d in dirnames if d not in EXCLUDED_DIRS]
        
        if is_dir_excluded(dirpath):
            continue

        # --- CONSTRUCCIÓN DEL SITEMAP (Árbol) ---
        level = dirpath.replace(root_dir, '').count(os.sep)
        indent = '    ' * level
        folder_name = os.path.basename(dirpath)
        
        if dirpath == root_dir:
            sitemap_lines.append(f"- 📂 **{os.path.basename(root_dir)}/**")
        else:
            sitemap_lines.append(f"{indent}- 📂 **{folder_name}/**")

        for file in filenames:
            file_path = os.path.join(dirpath, file)
            
            # Si es extensión ignorada (ej: .jpg), lo marcamos en el sitemap pero NO extraemos código
            if is_ignored_extension(file):
                sitemap_lines.append(f"{indent}    - 🖼️ {file} *(Medios/Binario omitido)*")
                continue 

            # Archivos normales
            sitemap_lines.append(f"{indent}    - 📄 {file}")

            # --- EXTRACCIÓN DE CONTENIDO ---
            relative_path = os.path.relpath(file_path, root_dir)
            
            # Doble verificación (por si es un binario sin extensión conocida)
            if is_binary_file(file_path):
                continue # Saltamos silenciosamente

            try:
                with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
                    content = f.read()
                
                # Solo agregamos al reporte si tiene contenido
                if content.strip(): 
                    lang = get_file_language(file)
                    file_sections.append(f"\n---\n")
                    file_sections.append(f"### 📄 `{relative_path}`")
                    file_sections.append(f"```{lang}\n{content}\n```")
            except Exception as e:
                print(f"⚠️ No se pudo leer {file}: {e}")

    # Ensamblar reporte final
    result_lines.append(f"# 📦 Reporte de Proyecto: {os.path.basename(root_dir)}\n")
    result_lines.append(f"*Generado automáticamente*\n\n")
    
    result_lines.append("## 🗺️ Estructura de Carpetas\n")
    result_lines.extend(sitemap_lines)
    
    result_lines.append("\n\n## 💻 Código de Archivos\n")
    if not file_sections:
        result_lines.append("*No se encontraron archivos de texto/código legibles.*")
    else:
        result_lines.extend(file_sections)

    return '\n'.join(result_lines)

# ==========================================
# EJECUCIÓN
# ==========================================
if __name__ == "__main__":
    content = build_sitemap_and_extract(ROOT_DIR)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out:
        out.write(content)

    print("-" * 50)
    print(f"✅ ¡Reporte generado!")
    print(f"📂 Archivos multimedia (img, mov) fueron omitidos del contenido.")
    print(f"📄 Archivo guardado en: {OUTPUT_FILE}")
    print("-" * 50)
import os
from PIL import Image
from datetime import datetime

# Ruta de entrada con imágenes .webp
carpeta_entrada = os.path.expanduser(r"~/Desktop/2025/IZ Management/10. October/Universidad Popular - Sintopia/Materiales/Fotos")

# --- CORRECCIÓN 1: Mejor ubicación para la carpeta de salida ---
# La creamos AL LADO de la carpeta de entrada, no DENTRO.
# Esto evita que el script intente leer su propia carpeta de salida.
# Se llamará ".../Materiales/Fotos_convertidas_png"
carpeta_salida = carpeta_entrada + "_convertidas_png"

# Crear carpeta de salida si no existe
os.makedirs(carpeta_salida, exist_ok=True)

# Archivo log
archivo_log = os.path.join(carpeta_salida, "log_conversion.txt")

# Contadores
exitos = 0
errores = 0

print(f"Iniciando conversión...")
print(f"Buscando en: {carpeta_entrada}")
print(f"Guardando en: {carpeta_salida}")

# Abrir el log para escribir
with open(archivo_log, "w", encoding="utf-8") as log:
    log.write(f"📅 Log de conversión - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
    log.write(f"🗂 Carpeta origen: {carpeta_entrada}\n")
    log.write(f"📁 Carpeta salida: {carpeta_salida}\n\n")

    # --- CORRECCIÓN 2: Usar os.walk() para buscar en subcarpetas ---
    # os.walk() recorre el árbol de directorios
    # dirpath = la carpeta actual que está escaneando
    # dirnames = lista de subcarpetas en dirpath
    # filenames = lista de archivos en dirpath
    for dirpath, dirnames, filenames in os.walk(carpeta_entrada):
        
        # --- MEJORA: Replicar la estructura de carpetas ---
        # 1. Calcula la ruta relativa de la subcarpeta (ej: "Dia 1/fotos_web")
        subcarpeta_relativa = os.path.relpath(dirpath, carpeta_entrada)
        
        # 2. Define la carpeta de salida actual (ej: ".../Fotos_convertidas_png/Dia 1/fotos_web")
        # Si es la carpeta raíz, subcarpeta_relativa es "." y no afecta el path
        carpeta_salida_actual = os.path.join(carpeta_salida, subcarpeta_relativa)
        
        # 3. Crea esta subcarpeta de destino si no existe
        os.makedirs(carpeta_salida_actual, exist_ok=True)

        # Ahora procesamos los archivos encontrados en ESTA carpeta (dirpath)
        for archivo in filenames:
            if archivo.lower().endswith(".webp"):
                # Ruta de entrada completa (usando dirpath)
                ruta_entrada = os.path.join(dirpath, archivo)
                nombre_sin_ext = os.path.splitext(archivo)[0]
                
                # Ruta de salida completa (usando la carpeta_salida_actual)
                ruta_salida = os.path.join(carpeta_salida_actual, nombre_sin_ext + ".png")
                
                try:
                    with Image.open(ruta_entrada) as img:
                        img.save(ruta_salida, "PNG")
                        
                    # Para el log, usamos la ruta relativa para que sea más legible
                    ruta_log = os.path.join(subcarpeta_relativa, archivo)
                    log.write(f"✅ Convertido: {ruta_log} → ...{os.path.sep}{subcarpeta_relativa}{os.path.sep}{nombre_sin_ext}.png\n")
                    print(f"[OK] {ruta_log} convertido a PNG.")
                    exitos += 1
                    
                except Exception as e:
                    ruta_log = os.path.join(subcarpeta_relativa, archivo)
                    log.write(f"❌ Error al convertir {ruta_log}: {str(e)}\n")
                    print(f"[ERROR] No se pudo convertir {ruta_log}: {e}")
                    errores += 1

    # Resumen final
    log.write("\n📊 Resumen:\n")
    log.write(f"✔️ Imágenes convertidas correctamente: {exitos}\n")
    log.write(f"❌ Imágenes con errores: {errores}\n")
    print("\n---- PROCESO COMPLETADO ----")
    print(f"Total convertidas: {exitos}")
    print(f"Total con errores: {errores}")
    print(f"Revisa el log aquí: {archivo_log}")
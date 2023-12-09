import os

def listar_carpetas_en_directorio_actual():
    carpetas = [nombre for nombre in os.listdir() if os.path.isdir(nombre)]
    return carpetas

carpetas_en_directorio_actual = listar_carpetas_en_directorio_actual()
print(carpetas_en_directorio_actual)

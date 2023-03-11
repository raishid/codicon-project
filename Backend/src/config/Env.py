from dotenv import dotenv_values
import os

def env(key: str):
    pathEnv = f'.env'
    if not os.path.exists(pathEnv):
        raise Exception("Archivo .env no encontrado")
    
    return dotenv_values(pathEnv)[key] if key in dotenv_values(pathEnv) else None
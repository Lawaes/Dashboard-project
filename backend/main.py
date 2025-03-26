from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import os

# Import des modules internes
from .database import engine, Base
from .routers import auth
from .auth import get_current_user
from .models import User

# Création des tables dans la base de données
Base.metadata.create_all(bind=engine)

# Initialisation de l'application
app = FastAPI(
    title="Dashboard API",
    description="API pour l'application Dashboard d'équipe",
    version="0.1.0"
)

# Configuration CORS pour permettre au frontend de communiquer avec l'API
# Autoriser les requêtes depuis n'importe quelle origine pour le développement distribué
origins = [
    "http://localhost:3000",           # Développement local
    "http://192.168.1.41:3000",        # Frontend sur le serveur
    "http://192.168.1.41",             # Serveur principal
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En développement: autoriser toutes les origines
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclusion des routers
app.include_router(auth.router)

# Route de base pour tester l'API
@app.get("/")
def read_root():
    return {"message": "Bienvenue sur l'API Dashboard!"}

# Route de santé pour vérifier que l'API fonctionne
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Route Hello World protégée nécessitant une authentification
@app.get("/hello", response_model=dict)
def hello_world(current_user = Depends(get_current_user)):
    return {
        "message": f"Hello World, {current_user.username}!",
        "user_id": current_user.id,
        "email": current_user.email
    }

# Démarrage de l'application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 
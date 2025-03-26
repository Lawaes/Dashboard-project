from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import os

# Initialisation de l'application
app = FastAPI(
    title="Dashboard API",
    description="API pour l'application Dashboard d'équipe",
    version="0.1.0"
)

# Configuration CORS pour permettre au frontend de communiquer avec l'API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # À ajuster en production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Route de base pour tester l'API
@app.get("/")
def read_root():
    return {"message": "Bienvenue sur l'API Dashboard!"}

# Route de santé pour vérifier que l'API fonctionne
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Démarrage de l'application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 
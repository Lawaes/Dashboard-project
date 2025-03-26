# Dashboard Projet

Application de tableau de bord collaboratif pour équipe.

## Architecture

Ce projet utilise une architecture moderne avec les technologies suivantes:

- **Backend**: FastAPI (Python)
- **Frontend**: React.js
- **Base de données**: PostgreSQL
- **Environnement**: Docker avec Portainer et Nginx Proxy Manager

## Structure du projet

```
├── backend/            # API FastAPI
├── frontend/           # Application React
├── docker/             # Configurations Docker supplémentaires
├── docker-compose.yml  # Configuration des services Docker
```

## Démarrage rapide

### Prérequis

- Docker et Docker Compose
- Git

### Étapes d'installation

1. Cloner le dépôt:
   ```
   git clone [URL_DU_REPO]
   cd dashboard-project
   ```

2. Initialiser le frontend React:
   ```
   cd frontend
   npx create-react-app .
   # ou
   npm create vite@latest . -- --template react
   ```

3. Lancer les services Docker:
   ```
   docker-compose up -d
   ```

4. Accéder aux différentes interfaces:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - Documentation API: http://localhost:8000/docs
   - Portainer: http://localhost:9000
   - Nginx Proxy Manager: http://localhost:81

## Développement

### Backend (FastAPI)

Le backend est construit avec FastAPI, offrant:
- API REST performante
- Documentation auto-générée
- Validation des données intégrée

Pour créer de nouvelles fonctionnalités:
1. Ajoutez vos modèles dans `backend/models/`
2. Créez vos schémas Pydantic dans `backend/schemas/`
3. Implémentez vos routes dans `backend/routers/`

### Frontend (React)

L'interface utilisateur utilise React avec:
- Composants réutilisables
- État global avec Context API ou Redux
- Routing avec React Router

## Fonctionnalités planifiées

- [ ] Authentification utilisateurs
- [ ] Gestion de projets
- [ ] Intégration réseaux sociaux
- [ ] Tableaux de bord personnalisables
- [ ] Gestion des autorisations

## Support

Pour toute question ou suggestion, veuillez contacter [VOTRE_NOM]. 
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

## Configuration pour environnement distribué

Ce projet est configuré pour:
- **Développement**: Sur votre PC de développement
- **Déploiement**: Sur un serveur à l'adresse 192.168.1.41

Le frontend est configuré pour communiquer avec le backend à l'adresse 192.168.1.41:8000.

## Démarrage rapide

### Prérequis

- Docker et Docker Compose sur le serveur de déploiement (192.168.1.41)
- Git

### Étapes d'installation

1. Cloner le dépôt sur votre PC de développement:
   ```
   git clone [URL_DU_REPO]
   cd dashboard-project
   ```

2. Pour continuer le développement du frontend:
   ```
   cd frontend
   npm install
   npm start
   ```
   Le frontend se connectera automatiquement au backend sur 192.168.1.41:8000.

3. Pour déployer sur le serveur (192.168.1.41):
   - Transférer les fichiers vers le serveur (via SCP, SFTP, ou Git)
   - Se connecter au serveur
   - Naviguer vers le dossier du projet
   - Lancer les services Docker:
   ```
   docker-compose up -d
   ```

4. Accéder aux différentes interfaces:
   - Frontend: http://192.168.1.41:3000
   - Backend API: http://192.168.1.41:8000
   - Documentation API: http://192.168.1.41:8000/docs
   - Portainer: http://192.168.1.41:9000
   - Nginx Proxy Manager: http://192.168.1.41:81

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

Après modifications du code frontend sur votre PC de développement:
1. Construisez l'application: `npm run build`
2. Transférez les fichiers vers le serveur de déploiement
3. Redémarrez le conteneur frontend: `docker-compose restart frontend`

## Configuration de Portainer sur le serveur (192.168.1.41)

### Déploiement via Portainer

1. Accédez à Portainer:
   - Ouvrez votre navigateur et accédez à `http://192.168.1.41:9000`
   - Créez un compte administrateur lors de la première connexion

2. Pour déployer votre projet:
   - Dans Portainer, allez dans "Stacks" et cliquez sur "Add stack"
   - Choisissez "Web editor" comme méthode
   - Copiez le contenu de votre docker-compose.yml
   - Cliquez sur "Deploy the stack"

3. La base de données PostgreSQL sera automatiquement configurée
   - Les informations de connexion sont:
     - Hôte: 192.168.1.41
     - Port: 5432
     - Base de données: dashboard
     - Utilisateur: postgres
     - Mot de passe: postgres

## Première utilisation

1. Créer un utilisateur:
   - Accédez à `http://192.168.1.41:8000/docs`
   - Utilisez l'endpoint `/auth/register` avec un payload comme:
   ```json
   {
     "email": "votre@email.com",
     "username": "votre_username",
     "password": "votre_mot_de_passe"
   }
   ```

2. Connectez-vous via l'interface utilisateur:
   - Accédez à `http://192.168.1.41:3000`
   - Utilisez les identifiants créés à l'étape précédente

## Fonctionnalités planifiées

- [ ] Authentification utilisateurs
- [ ] Gestion de projets
- [ ] Intégration réseaux sociaux
- [ ] Tableaux de bord personnalisables
- [ ] Gestion des autorisations

## Support

Pour toute question ou suggestion, veuillez contacter [VOTRE_NOM]. 
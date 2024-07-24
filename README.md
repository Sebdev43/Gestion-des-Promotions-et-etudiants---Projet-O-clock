# Gestion des Promotions et Étudiants - Projet O'clock

Bienvenue dans ce projet de gestion des promotions et des étudiants, développé dans le cadre de ma formation chez O'clock. Ce projet est un exercice pratique visant à mettre en œuvre des compétences en développement web, notamment en utilisant Node.js, Express et EJS pour créer une application web dynamique.

## Description

Ce projet permet de :

- Lister toutes les promotions disponibles.
- Afficher les détails d'une promotion spécifique.
- Lister les étudiants d'une promotion spécifique.
- Créer de nouvelles promotions et de nouveaux étudiants.

## Structure du Projet

- `index.js` : Point d'entrée de l'application, configuration du serveur Express.
- `router.js` : Définition des routes pour les différentes fonctionnalités.
- `controllers/` : Contient les contrôleurs pour gérer la logique des différentes routes.
  - `mainController.js` : Gère la page d'accueil.
  - `promoController.js` : Gère les opérations liées aux promotions.
  - `studentController.js` : Gère les opérations liées aux étudiants.
- `views/` : Contient les vues EJS utilisées pour afficher les données.
  - `index.ejs` : Page d'accueil.
  - `promo/` : Vues liées aux promotions (index, detail, create).
  - `students/` : Vues liées aux étudiants (students, create).
- `data/` : Contient les fichiers JSON avec les données des promotions et des étudiants.
- `public/` : Contient les fichiers statiques comme les styles CSS.

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/Sebdev43/Gestion-des-Promotions-et-tudiants---Projet-O-clock.git
cd <nom_du_dépôt>
```

2. Installez les dépendances :

```bash
npm install
```

3. Configurez les variables d'environnement en créant un fichier `.env` basé sur `.env.example` et en y ajoutant vos configurations de base de données.

4. Créez la base de données et les tables nécessaires en exécutant le script SQL fourni (`create_db.sql`).

5. Lancez l'application :

```bash
npm run dev
```

## Utilisation

1. Accédez à l'application dans votre navigateur à l'adresse http://localhost:3000.
2. Naviguez entre les différentes pages pour voir les promotions et les étudiants.
3. Utilisez les formulaires pour créer de nouvelles promotions et de nouveaux étudiants.

## Technologies Utilisées

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-808080?style=for-the-badge&logo=EJS&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)

## Auteurs

Ce projet a été réalisé par Sébastien Robert dans le cadre de la formation chez O'clock. Il constitue un exercice pratique visant à renforcer les compétences en développement web full stack.

## Remerciements

Merci à O'clock pour la formation et le support continu.

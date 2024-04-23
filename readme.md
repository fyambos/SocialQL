# SocialQL

SocialQL est un réseau social divisé en deux parties : le serveur GraphQL (Backend) et le client Front-End (Frontend). Le serveur utilise Apollo Server, Prisma et GraphQL Codegen pour gérer les données et les requêtes GraphQL, tandis que le client utilise un framework moderne comme React, Vue ou Svelte avec Apollo Client pour la communication avec le serveur.

## Structure du Projet

### Serveur GraphQL (Backend)
- Utilisation d'Apollo Server, Prisma et GraphQL Codegen.
- Implémentation de l'authentification JWT pour les utilisateurs.
- Modèles Prisma pour les utilisateurs, articles, commentaires et likes.
- Développement des queries et mutations pour gérer les utilisateurs, les articles, les commentaires et les likes.

### Client Front-End (Frontend)
- Utilisation d'un framework moderne comme React, Vue ou Svelte.
- Intégration d'Apollo Client pour la communication avec le serveur GraphQL et la gestion de l'état de l'application.
- Utilisation de GraphQL Codegen pour générer automatiquement les hooks/types à partir des schémas GraphQL.
- Création d'une interface utilisateur pour l'inscription/connexion des utilisateurs, la publication d'articles, l'affichage d'articles avec commentaires et likes, et la navigation entre les articles.

## Fonctionnalités Clés

### Authentification des Utilisateurs
- Inscription et connexion avec validation et gestion des sessions utilisateur.

### Gestion des Articles
- Création, lecture, mise à jour et suppression d'articles.
- Affichage des articles avec l'auteur, le contenu, les commentaires et les likes.

### Interaction avec les Articles
- Possibilité pour les utilisateurs de commenter les articles.
- Système de "like" pour les articles.

### Navigation et Filtrage
- Vue d'ensemble des derniers articles sur la page principale.
- Filtrage des articles par auteur ou popularité (nombre de likes).

## Instructions Spécifiques

- Utilisation de Consola pour la gestion d'erreurs

---

MIT License © 2024 SocialQL

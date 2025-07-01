# Express + TypeScript + MongoDB Product API

Ce projet est une API REST simple pour la gestion de produits, développée avec Express, TypeScript et MongoDB (via Mongoose).

## Fonctionnalités

- Ajouter un produit
- Lister tous les produits
- Récupérer un produit par nom
- Mettre à jour un produit par nom
- Supprimer un produit par nom

## Installation

1. Clone le dépôt.
2. Installe les dépendances :

   ```sh
   npm install
   ```

3. Lance MongoDB localement sur `mongodb://localhost:27017/shop`.
4. Démarre le serveur :

   ```sh
   npm start
   ```

## Endpoints

- `GET /`  
  Test de connexion à l'API.

- `GET /product/`  
  Liste tous les produits.

- `GET /product/:name`  
  Récupère un produit par son nom.

- `POST /Addproduct`  
  Ajoute un nouveau produit.  
  **Body JSON :**

  ```json
  {
    "name": "NomProduit",
    "class": "ClasseProduit",
    "pr": 123,
    "img": "url_image"
  }
  ```

- `PUT /product/:name`  
  Met à jour un produit existant par son nom.  
  **Body JSON :** (mêmes champs que ci-dessus)

- `DELETE /product/:name`  
  Supprime un produit par son nom.

## Structure du projet

- [`index.ts`](index.ts) : Point d'entrée principal de l'application.
- [`src/models/products.ts`](src/models/products.ts) : Modèle Mongoose pour les produits.

## Dépendances principales

- express
- mongoose
- typescript

## Licence

MIT

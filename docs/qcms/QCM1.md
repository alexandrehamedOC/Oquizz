# QCM 1

Un `wireframe` est :

- un board de gestion de projet
- une maquette fonctionnelle d'une page
- la description complète d'une fonctionnalité
- un scenario de test

`dotenv` permet de :

- charger les variables d'environnement
- définir les variables d'environnement
- empêcher de versionner les variables d'environnement

Devant mon `MCD` :

- je précise les relations entre mes tables et leurs différents champs
- je précise les associations entre mes entités et leurs différents attributs
- je pars en courant

"Dans ma `TodoApp3000`, une LISTE peut avoir plusieurs CARTES mais une CARTE ne peut appartenir qu'à une et une LISTE". Je le modélise comment :

- `LISTE --0:N-- APPARTIENT --1:1-- CARTE`
- `LISTE --1:1-- APPARTIENT --0:N-- CARTE`
- `LISTE --1:N-- APPARTIENT --1:N-- CARTE`

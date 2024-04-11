# QCM 1 - CORRECTION

Un `wireframe` est :

- ❌ un board de gestion de projet --> **Kanban**
- ✅ une maquette fonctionnelle d'une page
- ❌ la description complète d'une fonctionnalité --> **Specification**
- ❌ un scenario de test --> **User story**

Le module `dotenv` permet de :

- ✅ charger les variables d'environnement --> Charger = les lire et les mettre dans le processus Node
- ❌ définir les variables d'environnement --> `.env`
- ❌ empêcher de versionner les variables d'environnement --> `.gitignore`

Devant mon `MCD` :

- ❌ je précise les relations entre mes tables et leurs différents champs --> plutôt réservé pour le `MLD` / `MPD`
- ✅ je précise les **associations** entre mes **entités** et leurs différents **attributs**
- ❌ je pars en courant

🇬🇧 : `Relation` === `Table` --> N'utilisez pas ce terme pour parler d'association.

"Dans ma `TodoApp3000`, une LISTE peut avoir plusieurs CARTES mais une CARTE ne peut appartenir qu'à une et une LISTE". Je le modélise comment :

- ✅ `LISTE --0:N-- APPARTIENT --1:1-- CARTE`
- ❌ `LISTE --1:1-- APPARTIENT --0:N-- CARTE` -> Une liste a 1 et 1 seule carte ? -> faux
- ❌ `LISTE --1:N-- APPARTIENT --1:N-- CARTE` -> Une carte a entre 1 et N liste ? -> faux

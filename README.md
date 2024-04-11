# O'quiz

## Atelier

Fini les tests ! Maintenant qu'on a des super modèles, on va brancher tout ça dans une archi Express !

### Page d'accueil

L'intégration est fournie !

Commencer par découper l'intégration en views façon EJS.
Pensez à supprimer les fichiers html, si vous définissez le repertoire `integration/` comme répertoire des statiques.
Sinon vous allez afficher par défaut le contenu du fichier `index.html` lors de l'appel à `http://localhost:xxxx/`

Ensuite, créer la route et la méthode correspondante dans le controller "mainController".

### Visualiser les titres, la description et les auteurs des quiz sur la page d’accueil

Remplacer les fausses données "en dur" par les données issues des Models !

Ici, se servir de Sequelize est une bonne idée (cf [les associations](https://sequelize.org/master/manual/eager-loading.html)).

### Pouvoir accéder aux questions d’un quiz

Il va falloir une nouvelle route (`/quiz/:id`).

Coder la méthode correspondante dans un nouveau controlleur (`quizController`).

Ici aussi, Sequelize va être bien pratique...

1. pouvoir visualiser la difficulté de chaque question

2. visualiser tous les sujets rattachés au quiz

### pouvoir visualiser tous les sujets

Nouvelle route (`/tags`)

Nouveau controller (`tagController`)

### pouvoir visualiser tous les quiz pour un sujet donné

Astuce : utiliser le model Tag, et se servir des "includes" de Sequelize pour en déduire les quiz concernées !

### :v: Bonus facile : Ajouter tous les liens qui pourraient manquer

Il y a surement des endroits ou il serait intéressant de pouvoir cliquer, afin de rendre la navigation plus fluide.

### :skull_and_crossbones::clock4: Bonus de la mort où j'ai une semaine devant moi et je savais pas quoi faire : formulaires

Rajouter les formulaires d'inscription et de connexion.
Avec tout ce qui est nécessaire (Ajout en base de données, login en session plus ou moins longue)

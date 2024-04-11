# QCM 4

`sequelize` est :

- ❌ un SGBD -> Systeme de Gestion de Base de Données (ex : Postgres / MySQL / MongoDB)
- ✅ un ORM -> Object Relational Mapping  
- ❌ un CLI -> Command Line Interface (terminal)
- ❌  un AR (Active Record) -> un modèle dans Sequelize ou autre

Laquelle de ces **méthodes de classe** n'existe pas dans `sequelize`

- ❌ `Model.findAll()` --> retourne toutes les instance
- ❌ `Model.create()` --> `Model.build()` + `instance.save()`
- ❌ `Model.findOne()` --> retourne une instance
- ✅ `Model.findById()` --> `Model.findByPk()`

Laquelle de ces **méthodes d'instance** n'existe pas dans `sequelize`

- ❌ `model.save()` --> enregistre l'entité en BDD
- ✅  `model.insert()` --> existe pas dans Sequelize (on l'avait codé nous !)
- ❌ `model.set()` --> set une propriété en passant par les setters de l'entité
- ❌ `model.destroy()` --> retirer l'entité de la BDD !

Dans l'assignation : `const sequelize = new Sequelize(process.env.PG_URL);`, la variable `sequelize` designe :

- ❌ le module sequelize ---> `require("sequelize")` === le module sequelize
- ✅ l'instance de connexion à la BDD  --> un client connecté vers notre BDD Postgres
- ❌ l'adresse de la BDD Postgresql ---> `process.env.PG_URL`
- ❌ le constructeur de la classe Sequelize ---> `new Sequelize`

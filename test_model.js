const Level = require('./app/models/Level');

// Un lien vers la documentation pour faire des requêtes avec Sequelize
// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-insert-queries
async function run() {
  // On récupère tous les nom de niveaux triés par ordre décroissant
  const levels = await Level.findAll({
    order: [['name', 'DESC']],
    attributes: ['name'],
  });

  // Je souhaite créer un Level
  // Méthode 1
  const monSuperLevel = await Level.create({
    name: 'Super niveau',
  });

  // Méthode 2
  const superNiveau = new Level({
    name: 'Super niveau trop chouette',
  });
  // On sauvegarde le niveau
  // Si j'ai un id sur mon "superNiveau" alors il va faire un UPDATE
  // Sinon il va faire un INSERT
  await superNiveau.save();

  // Si je souhaite modifier un niveau
  superNiveau.name = 'Super niveau trop chouette modifié';
  await superNiveau.save();

  // Pour modifier je peux aussi faire
  const [nbElmUpdated, dataUpdated] = await Level.update({
    // Donnée à modifier
    name: 'Super niveau trop chouette modifié',
  }, {
    // Condition pour la modification
    where: {
      name: 'Super niveau trop chouette',
    },
    returning: true,
  });

  // Si je souhaite récupérer les niveaux avec des conditions
  const levelsTropChouette = await Level.findAll({
    where: {
      name: 'Super niveau trop chouette',
    },
  });

  // Si je souhaite supprimer
  // Depuis mon instance, j'appel la méthode destroy
  await superNiveau.destroy();

  // Depuis le model
  await Level.destroy({
    where: {
      name: 'Super niveau trop chouette modifié',
    },
  });
}

run();

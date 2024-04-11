const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');

// La class Model provient de sequelize
// C'est l'équivalent à notre CoreModel mais en mieux
class Level extends Model {}

// Pour définir les colonnes / attribut de notre model
Level.init({
  // Je précise les attributs (hors id, created_at, updated_at et clé étrangère)
  name: {
    // Cette colonne est de type TEXT
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  // On doit lui passé le client de notre bdd qui lui permettra de faire des requêtes
  sequelize,
  // Sequelize est capable d'essayer de trouver le nom de la table tout seul
  tableName: 'level',
});

// On exporte notre model
module.exports = Level;

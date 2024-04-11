require('dotenv/config');
const { Sequelize } = require('sequelize');

// J'ai créer mon client sequelize (qui se connecte à ma base de données)
const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    // De base Sequelize utilise le camelCase pour les noms de talbe / colonnes
    // Moi je souhaite utiliser le snake_case
    underscored: true,
  },
});

module.exports = sequelize;

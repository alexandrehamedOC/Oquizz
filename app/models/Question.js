const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');

class Question extends Model {}

Question.init({
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  wiki: {
    type: DataTypes.TEXT,
    // Pas besoin de préciser allowNull car il sera par défaut à true
  },
  anecdote: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  tableName: 'question',
});

module.exports = Question;

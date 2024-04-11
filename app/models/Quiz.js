const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');


class Quiz extends Model {
  get formattedDateFR() {
    const date = new Date(this.createdAt);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return date.toLocaleDateString('fr-FR', options);
  }
}

Quiz.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    // Pas besoin de préciser allowNull car il sera par défaut à true
  },
}, {
  sequelize,
  tableName: 'quiz',
});

module.exports = Quiz;

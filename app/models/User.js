const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');

class User extends Model {}

User.init({
  firstname: {
    type: DataTypes.TEXT,
  },
  lastname: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'user',
});

module.exports = User;

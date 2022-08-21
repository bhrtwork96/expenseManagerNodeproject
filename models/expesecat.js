'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class expeseCats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      expeseCats.hasMany(models.ExpenseTra)
    }
  }
  expeseCats.init({
    name: DataTypes.TEXT,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'expeseCats',
  });
  return expeseCats;
};
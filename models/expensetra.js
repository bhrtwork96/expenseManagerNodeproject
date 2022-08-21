'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExpenseTra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExpenseTra.init({
    day: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ExpenseTra',
  });
  return ExpenseTra;
};
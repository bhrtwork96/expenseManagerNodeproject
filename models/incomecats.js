'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IncomeCats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      IncomeCats.hasMany(models.IncomeTra)
    }
  }
  IncomeCats.init({
    name: DataTypes.TEXT,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'IncomeCats',
  });
  return IncomeCats;
};
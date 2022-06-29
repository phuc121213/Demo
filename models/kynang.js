'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kynang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // ĐỊNH DANH CÁC MỐI QUAN HỆ
    static associate(models) {
      // define association here
    }
  };
  kynang.init({
    maKN: DataTypes.STRING,
    tenKN: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'kynang',
  });
  return kynang;
};
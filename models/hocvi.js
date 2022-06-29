'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hocvi extends Model {
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
  hocvi.init({
    maHV: DataTypes.STRING,
    tenHV: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'hocvi',
  });
  return hocvi;
};
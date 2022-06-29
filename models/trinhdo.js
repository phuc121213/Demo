'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trinhdo extends Model {
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
  trinhdo.init({
    maTrinhdo: DataTypes.STRING,
    TenTrinhdo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'trinhdo',
  });
  return trinhdo;
};
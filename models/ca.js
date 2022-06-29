'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ca extends Model {
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
  ca.init({
    sttCa: DataTypes.STRING,
    gioBD: DataTypes.STRING,
    gioKT: DataTypes.STRING,
    ghiChu: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'ca',
  });
  return ca;
};
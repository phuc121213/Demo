'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thongtindangky extends Model {
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
  thongtindangky.init({
    hoTen: DataTypes.STRING,
    gioiTinh : DataTypes.BOOLEAN,
    ngaySinh: DataTypes.DATE,
    sdt: DataTypes.STRING,
    diaChi : DataTypes.TEXT,
    email: DataTypes.STRING,
  
  }, {
    sequelize,
    modelName: 'thongtindangky',
  });
  return thongtindangky;
};
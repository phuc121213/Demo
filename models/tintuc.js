'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tintuc extends Model {
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
  tintuc.init({
    tieuDe: DataTypes.STRING,
    noiDung: DataTypes.TEXT,
    hinhAnh: DataTypes.STRING,
    ngayDang: DataTypes.DATE
    
  }, {
    sequelize,
    modelName: 'tintuc',
  });
  return tintuc;
};
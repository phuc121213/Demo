'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ketquahoctap extends Model {
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
  ketquahoctap.init({
    diem: DataTypes.STRING,
    danhGia: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'ketquahoctap',
  });
  return ketquahoctap;
};
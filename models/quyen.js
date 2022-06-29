'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quyen extends Model {
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
  quyen.init({
    tenQuyen: DataTypes.STRING,
  
  }, {
    sequelize,
    modelName: 'quyen',
  });
  return quyen;
};
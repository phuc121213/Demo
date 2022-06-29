'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tang extends Model {
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
  tang.init({
    tenTang: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'tang',
  });
  return tang;
};
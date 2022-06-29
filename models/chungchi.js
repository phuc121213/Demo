'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chungchi extends Model {
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
  chungchi.init({
    maCC: DataTypes.STRING,
    tenCC: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'chungchi',
  });
  return chungchi;
};
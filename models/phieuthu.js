'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phieuthu extends Model {
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
  phieuthu.init({
    soThutu: DataTypes.STRING,
    ngayThu: DataTypes.DATE,
    soTien: DataTypes.STRING,
    trangThai: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'phieuthu',
  });
  return phieuthu;
};
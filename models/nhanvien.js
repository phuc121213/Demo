'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nhanvien extends Model {
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
  nhanvien.init({
    maNV: DataTypes.STRING,
    hoTen: DataTypes.STRING,
    ngaySinh: DataTypes.DATE,
    sdt: DataTypes.STRING,
    matKhau : DataTypes.STRING,
    gioiTinh : DataTypes.BOOLEAN,
    diaChi : DataTypes.STRING,
    email: DataTypes.STRING,
    roleid : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nhanvien',
  });
  return nhanvien;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class giangvien extends Model {
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
  giangvien.init({
    maGV: DataTypes.STRING,
    hoTen: DataTypes.STRING,
    ngaySinh: DataTypes.DATE,
    gioiTinh : DataTypes.BOOLEAN,
    diaChi : DataTypes.STRING,
    sdt: DataTypes.STRING,
    email: DataTypes.STRING,
    matKhau : DataTypes.STRING,
    roleid : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'giangvien',
  });
  return giangvien;
};
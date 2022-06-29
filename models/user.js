'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
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
  Users.init({
    
    hoTen: DataTypes.STRING,
    ngaySinh: DataTypes.DATE,
    sdt: DataTypes.STRING,
    matKhau : DataTypes.STRING,
    gioiTinh : DataTypes.BOOLEAN,
    diaChi : DataTypes.STRING,
    email: DataTypes.STRING,
    roleId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
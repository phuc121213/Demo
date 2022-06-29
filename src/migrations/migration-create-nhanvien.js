'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nhanvien', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maNV: {
        type: Sequelize.STRING
      },
      hoTen: {
        type: Sequelize.STRING
      },
      ngaySinh: {
        type: Sequelize.DATE
      },
      sdt: {
        type: Sequelize.STRING
      },
      matKhau: {
        type: Sequelize.STRING
      },
      gioiTinh: {
        type: Sequelize.BOOLEAN
      },
      diaChi: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      roleid: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('nhanvien');
  }
};
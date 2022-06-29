'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      roleId: {
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
    await queryInterface.dropTable('Users');
  }
};
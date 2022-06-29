'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ca', {
      // gioBD: DataTypes.STRING,
      // gioKT: DataTypes.STRING,
      // ghiChu: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sttCa :{
        type: Sequelize.STRING,
        primaryKey: true
      },
      gioBD: {
        type: Sequelize.STRING
      },
      gioKT: {
        type: Sequelize.STRING
      },
      ghiChu: {
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
    await queryInterface.dropTable('ca');
  }
};
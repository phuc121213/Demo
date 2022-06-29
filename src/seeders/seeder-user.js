'use strict';

module.exports = {
  //them du lieu
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      
      hoTen:'nguyen phuc',
      ngaySinh:'24/04/1999' ,
      sdt: 'phuc',
      matKhau:'123456',
      gioiTinh: 1  ,
      diaChi:'hau giang' ,
      email: 'phuc@example.com',
      roleId: 'role',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
    // rolback sẽ chạy hàm down
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }  

  
};

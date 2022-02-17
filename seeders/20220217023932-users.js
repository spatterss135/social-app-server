'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        profile_pic: 'https://placekitten.com/200/300'
      },
      {
        name: 'John Lester',
        profile_pic: 'https://placekitten.com/200/300'
      },
      {
        name: 'Bertram Lewis',
        profile_pic: 'https://placekitten.com/200/300'
      },
      {
        name: 'The guy from Ozark',
        profile_pic: 'https://placekitten.com/200/300'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('likes', [
      {
        post_id: 1,
        user_id: 2
      },
      {
        post_id: 2,
        user_id: 3
      },
      {
        post_id: 2,
        user_id: 4
      },
      {
        post_id: 2,
        user_id: 5
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

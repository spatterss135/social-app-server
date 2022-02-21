'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('likes', [
      {
        like_id: 1,
        post_id: 1,
        user_id: 2
      },
      {
        like_id: 2,
        post_id: 2,
        user_id: 3
      },
      {
        like_id: 3,
        post_id: 2,
        user_id: 4
      },
      {
        like_id: 4,
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

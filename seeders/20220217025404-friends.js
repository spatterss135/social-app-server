'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('friends', [
      {
        friendship_id: 1,
        user_id: 1,
        friend_id: 2
      },
      {
        friendship_id: 2,
        user_id: 1,
        friend_id: 3
      },
      {
        friendship_id: 3,
        user_id: 1,
        friend_id: 4
      },
      {
        friendship_id: 4,
        user_id: 2,
        friend_id: 3
      },
      {
        friendship_id: 5,
        user_id: 2,
        friend_id: 4
      },
      {
        friendship_id: 6,
        user_id: 3,
        friend_id: 4
      }
    ], {})
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

'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('posts', 'created_at', {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
      
    })
  },

  async down (queryInterface, Sequelize) {

    queryInterface.removeColumn('posts', 'created_at');
  }
};

'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('posts', 'edited', {
      type: DataTypes.BOOLEAN,
      defaultValue: false
      
    })
  },

  async down (queryInterface, Sequelize) {

    queryInterface.removeColumn('posts', 'created_at');
  }
};


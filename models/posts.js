'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      posts.belongsTo(users, {
        foreignKey: "user_id",
        as: "user" //????
      })
    }
  }
  posts.init({
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'posts',
    tableName: 'posts',
    timestamps: false
  });
  return posts;
};
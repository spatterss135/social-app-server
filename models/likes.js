'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( {users, posts} ) {
      likes.belongsTo(users, {
        foreignKey: 'user_id',
        as: 'user'
      })

      likes.belongsTo(posts, {
        foreignKey: 'post_id',
        as: 'post'
      })
    }
  }
  likes.init({
    like_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'likes',
    tableName: 'likes',
    timestamps: false
  });
  return likes;
};
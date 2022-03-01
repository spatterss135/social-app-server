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
    static associate({ users, likes }) {
      posts.belongsTo(users, {
        foreignKey: "user_id",
        as: "user" //????
      })

      posts.hasMany(likes, {
        foreignKey: 'post_id',
        as: 'likes'
      })
    }
  }
  posts.init({
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE
    },
    edited: {
      type: DataTypes.BOOLEAN
    }

  }, {
    sequelize,
    modelName: 'posts',
    tableName: 'posts',
    timestamps: false
  });
  return posts;
};
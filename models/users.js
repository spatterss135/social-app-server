'use strict';
const {
  Model
} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ posts, friends, likes }) {
      users.hasMany(posts, {
        foreignKey: "user_id",
        as: "posts" //???
      })

      users.hasMany(friends, {
        foreignKey: 'user_id',
        as: 'friends'
      })

      users.hasMany(likes, {
        foreignKey: 'user_id',
        as: 'likes'
      })
    }
  }
  users.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_pic: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    timestamps: false
  });
  return users;
};
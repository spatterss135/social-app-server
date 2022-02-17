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
    static associate({ posts }) {
      users.hasMany(posts, {
        foreignKey: "user_id",
        as: "posts" //???
      })
    }
  }
  users.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
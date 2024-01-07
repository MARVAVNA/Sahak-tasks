'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define("Users", {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.DataTypes.STRING(128),
    },
    last_name: {
      type: Sequelize.DataTypes.STRING(128),
    },
    email: {
      type: Sequelize.DataTypes.STRING(128),
    },
    password: {
      type: Sequelize.DataTypes.STRING(128),
    }
  }, {
    timestamps: false,
    tableName: 'users'
  });
};
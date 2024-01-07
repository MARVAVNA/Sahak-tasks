'use strict';
require('dotenv').config()
const Sequelize = require('sequelize')

const { DB_TABLE, DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST } = process.env

const sequelize = new Sequelize(DB_TABLE, DB_USER, DB_PASSWORD, {
  dialect: DB_DIALECT,
  host: DB_HOST,
  logging: false,
})

const users = require('./users')(sequelize)

module.exports = {
  sequelize,
  users,
}

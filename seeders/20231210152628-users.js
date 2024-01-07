'use strict';
require('dotenv').config()
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */

const data = [
  {
    email: 'hayk.avetisyan@gmail.com',
    password: '123456HA',
    last_name: 'Avetisyan',
    first_name: 'Hayk',
  },
  {
    email: 'hayk.ghazaryan@gmail.com',
    password: '123456HG',
    last_name: 'Ghazaryan',
    first_name: 'Hayk',
  },
  {
    email: 'hamlet.moroyan@gmail.com',
    password: '123456HM',
    last_name: 'Moroyan',
    first_name: 'Hamlet',
  },
  {
    email: 'sahak.iskanyan@gmail.com',
    password: '123456SI',
    last_name: 'Iskanyan',
    first_name: 'Sahak',
  }
]

const hashPasswords = async () => {
  const saltRounds = 10;
  for (let i = 0; i < data.length; i++) {
    try {
      const salt = await bcrypt.genSalt(saltRounds)
      const hash = await bcrypt.hash(data[i].password, salt);
      data[i].password = hash
    } catch (err) {
      console.error('Error generating hash:', err)
    }
  }
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await hashPasswords()
    return queryInterface.bulkInsert('users', data)
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('users', null, {})
  }
};

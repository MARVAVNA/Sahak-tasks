'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createDatabase('sahak_tasks')
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropSchema('sahak_tasks')
  }
};

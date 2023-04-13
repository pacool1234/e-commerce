'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Categories', [
      {
          name: 'alcohol',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      
      {
          name: 'food',
          createdAt: new Date(),
          updatedAt: new Date()
      },

      {
          name: 'weapons',
          createdAt: new Date(),
          updatedAt: new Date()
      },

      {
          name: 'electronics',
          createdAt: new Date(),
          updatedAt: new Date()
      },

      {
          name: 'books',
          createdAt: new Date(),
          updatedAt: new Date()
      }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

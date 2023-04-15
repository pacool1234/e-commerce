'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Categories', [
      {
          name: 'desktop',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      
      {
          name: 'laptop',
          createdAt: new Date(),
          updatedAt: new Date()
      },

      {
          name: 'smartphone',
          createdAt: new Date(),
          updatedAt: new Date()
      },

      {
          name: 'tablet',
          createdAt: new Date(),
          updatedAt: new Date()
      },

      {
          name: 'TV',
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

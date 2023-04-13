'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Products', [
        {
            name: 'Samsung Galaxy S23 Ultra',
            price: 1399,
            CategoryId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Tanqueray No.10',
            price: 29.95,
            CategoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Delirium Tremens',
            price: 9.5,
            CategoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Doritos Tex Mex',
            price: 0.89,
            CategoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Magnum 0.44 caliber',
            price: 2000,
            CategoryId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: '100 years of solitude',
            price: 16.99,
            CategoryId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};

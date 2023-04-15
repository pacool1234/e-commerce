'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Products', [
        {
            name: 'Samsung Galaxy S23 Ultra',
            price: 1399,
            CategoryId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Apple iPhone 14 Pro Max',
            price: 1599,
            CategoryId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Xiaomi Mi 13 Pro',
            price: 1149,
            CategoryId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Vivo X90 Pro',
            price: 1399,
            CategoryId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Apple iMac 27inch',
            price: 3499,
            CategoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'HP Z90 Workstation',
            price: 7000,
            CategoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Asus Vivobook 15',
            price: 699,
            CategoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'LG Ultra 14inch',
            price: 1290,
            CategoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Toshiba Portege HL14',
            price: 1450,
            CategoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Apple iPad Pro',
            price: 1799,
            CategoryId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Samsung Galaxy Tab S8 Plus',
            price: 1200,
            CategoryId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Samsung Galaxy Tab A 2016',
            price: 299,
            CategoryId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Kindle Paperwhite',
            price: 199,
            CategoryId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            name: 'Kobo e-Reader',
            price: 129,
            CategoryId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
      Product.hasMany(models.Review)
      Product.belongsTo(models.Category)
      Product.belongsToMany(models.Order, {
        through: models.OrderProduct
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMERIC(10,2),
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
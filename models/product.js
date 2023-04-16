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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce product name'
        }
      }
    },
    price: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce product price'
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce product category ID'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
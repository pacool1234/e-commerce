'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Review)
      User.hasMany(models.Order)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce your name'
        }
      }
    },

    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce your surname'
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          message: 'Introduce your email address'
        },
        isEmail: true
      }
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce your password'
        }
      }
    },

    role: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN  
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
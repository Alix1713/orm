const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // change: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // {
    //   category_name: 'Shirts',
    // },
    // {
    //   category_name: 'Shorts',
    // },
    // {
    //   category_name: 'Music',
    // },
    // {
    //   category_name: 'Hats',
    // },
    // {
    //   category_name: 'Shoes',
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

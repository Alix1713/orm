const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

// {
//   tag_name: 'rock music',
//   tag_name: 'pop music',
//   tag_name: 'blue',
//   tag_name: 'red',
//   tag_name: 'green',
//   tag_name: 'white',
//   tag_name: 'gold',
//   tag_name: 'pop culture',

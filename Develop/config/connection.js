require("dotenv").config();

const Sequelize = require("sequelize");
console.log(process.env.DB_NAME);
let DB_NAME = process.env.DB_NAME || "ecommerce_db";
let DB_USER = process.env.DB_USER || "root";
let DB_PW = process.env.DB_PW || "password";
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(DB_NAME, DB_USER, DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

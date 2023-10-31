const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.POSTGRESQL_DB,
  process.env.POSTGRESQL_DB_USER,
  process.env.POSTGRESQL_DB_PASSWORD,
  {
    host: process.env.POSTGRESQL_DB_HOST,
    port: process.env.POSTGRESQL_DB_PORT,
    dialect: 'postgres'
  }
);

const connectToDB = async() => {
    try {
        await sequelize.authenticate();
        console.log("ORM Connection has been established successfully.");
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {sequelize, connectToDB}
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  'rmh_db',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    port: 5432,
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
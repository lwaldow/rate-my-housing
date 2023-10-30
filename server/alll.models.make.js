const { Sequelize, DataTypes } = require("sequelize");
const {User, Review, Complex, Address} = require('./all.model.js')
require('dotenv').config();



const sequelize = new Sequelize(
    process.env.POSTGRESQL_DB,
    process.env.POSTGRESQL_DB_USER,
    process.env.POSTGRESQL_DB_PASSWORD,
    {
      host: process.env.POSTGRESQL_DB_HOST,
      port: process.env.POSTGRESQL_DB_PORT,
      "dialect": 'postgres'
    }
  );


sequelize.authenticate().then(() => {
    console.log('ORM Connection has been established successfully.');
 }).catch((error) => {
    console.error('ORM Unable to connect to the database: ', error);
 });

 sequelize.sync().then(() => {
    console.log('all table created successfully!');
 }).catch((error) => {
    console.error('Unable to create tables : ', error);
 });
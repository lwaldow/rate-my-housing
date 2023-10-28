const { Sequelize, DataTypes } = require("sequelize");
import {User, Address, Complex, Review} from all.model.js ;


const sequelize = new Sequelize(
 process.env.POSTGRESQL_DB,
 process.env.POSTGRESQL_DB_USER, 
 process.env.POSTGRESQL_DB_USER, 
  {
    host: process.env.POSTGRESQL_DB_HOST, 
    dialect: 'postgres'
  }
);

sequelize.authenticate().then(() => {
    console.log('ORM Connection has been established successfully.');
 }).catch((error) => {
    console.error('ORM Unable to connect to the database: ', error);
 });




sequelize.sync().then(() => {
  console.log('review table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

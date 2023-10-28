import { Sequelize, DataTypes } from 'sequelize';

const express = require('express');
const app = express();
const PORT = 8080;


const Sequelize = require("sequelize");
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


app.get("/", (req, res) => {
    res.json({message: "hello world"});
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
});
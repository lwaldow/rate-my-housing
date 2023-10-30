const express = require('express');
const app = express();
const PORT = 8080;
const controller  = require('./all.controller.js')
const {User, Review, Complex, Address} = require('./all.model.js')
require('dotenv').config();


const Sequelize = require("sequelize");
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


app.get("/", (req, res) => {
    res.json({message: "hello world"});
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
});

console.log('\\\\\\\\\\\\\\\\\?????????????????')
console.log(controller.insertUser('fjim@gmail.com'));


sequelize.sync().then(() => {

    User.create({ email: "hane" }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

const jane = User.build({ email: "Jane" });
console.log(jane instanceof User); // true
console.log(jane.email);
jane.save()
console.log('save jane')

const users = User.findAll();
// console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));

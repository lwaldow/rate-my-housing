const express = require('express');
const app = express();
const PORT = 8080;


const Sequelize = require("sequelize");
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
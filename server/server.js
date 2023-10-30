const express = require('express');
const app = express();
const PORT = 8080;
const {sequelize, connectToDB} = require('./db')
const {User, Review, Complex, Address} = require('./all.model')

app.get("/listings", async (req, res) => {
    const users = await Complex.findAll();
    res.status(200).json(users);
});

app.post("/listings", async (req, res) => {
    const data = req.body
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    connectToDB();
});
const express = require('express');
const app = express();
const PORT = 8080;
const {sequelize, connectToDB} = require('./db')
const {User, Review, Complex, Address} = require('./all.model')
const controller  = require('./all.controller.js')
const body_parser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// get users
app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
});

app.post("/users", async (req, res) => {
        const args = req.body


    try {
        const newUser = await controller.insertUser(email)
        res.status(201).json(newUser)
    }
    catch(err) {
        res.json(err)
    }
})

app.post("/complexes", async (req, res) => {
    const args = req.body
    try {
        const newComplex = await controller.insertComplex(args.name, args.management)
        res.status(201).json(newComplex)
    }
    catch(err) {
        res.json(err)
    }
})

app.post("/addresses", async (req, res) => {
    const args = req.body

    try {
        const newAdress = await controller.insertAddress(args.state,args.town,args.zip,args.address,args.foreign_complex_id)
        res.status(201).json(newAdress)
    }
    catch(err) {
        res.json(err)
    }
})

app.post("/review", async (req, res) => {
    const args = req.body

    try {
        const newReview = await controller.insertReview(args.text_review,args.kitchen,args.tag,args.bathroom,args.parking,args.location,args.pet,args.storage,args.laundry)
        res.status(201).json(newReview)
    }
    catch(err) {
        res.json(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    connectToDB();
});

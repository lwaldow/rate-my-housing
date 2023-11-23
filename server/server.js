const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8080;
const {sequelize, connectToDB} = require('./db')
const {User, Review, Listing} = require('./all.model')
const controller  = require('./all.controller.js')
const body_parser = require('body-parser')

app.use(cors())
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
        const newUser = await controller.insertUser(args.email)
        res.status(201).json(newUser)
    }
    catch(err) {
        res.json(err)
    }
});

// get complexes
app.get("/listings", async (req, res) => {
    const listings = await Listing.findAll();
    res.status(200).json(listings);
});

app.post("/listings", async (req, res) => {
    const args = req.body
    try {
        const newListing = await controller.insertListing(args.name, args.management, 
            args.state, args.town, args.zip, args.address)
        res.status(201).json(newListing)
    }
    catch(err) {
        res.json(err)
    }
});

// app.post("/addresses", async (req, res) => {
//     const args = req.body

//     try {
//         const newAdress = await controller.insertAddress(args.state,args.town,args.zip,args.address,args.foreign_complex_id)
//         res.status(201).json(newAdress)
//     }
//     catch(err) {
//         res.json(err)
//     }
// });

app.post("/reviews", async (req, res) => {
    const args = req.body

    try {
        const newReview = await controller.insertReview(args.text_review,args.kitchen,args.tag,args.bathroom,args.parking,args.location,args.pet,args.storage,args.laundry,args.foreign_user_id)
        res.status(201).json(newReview)
    }
    catch(err) {
        res.json(err)
    }
});

app.put("/reviews", async (req, res) => {
    const args = req.body

    try {
        const editReview = await controller.editReview(args.text_review,args.kitchen,args.tag,args.bathroom,args.parking,args.location,args.pet,args.storage,args.laundry,args.foreign_user_id)
        res.status(201).json(editReview)
    }
    catch(err) {
        res.json(err)
    }
});

app.get("/search_reviews", async (req, res) => {
    const args = req.body

    try {
        const editReview = await controller.editReview(args.kitchen_l,args.kitchen_h,args.bathroom_l,args.bathroom_h,args.parking_l,args.parking_h,args.location_l,args.location_h,args.pet_l,args.pet_h,args.storage_l,args.storage_h,args.laundry_l,args.laundry_h)
        res.status(201).json(editReview)
    }
    catch(err) {
        res.json(err)
    }
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    connectToDB();
});

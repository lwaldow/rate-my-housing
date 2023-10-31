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
    const {email} = req.body

    const newUser = User.build({
        'email': email
    })

    try {
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch(err) {
        res.json(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    connectToDB();
});

// console.log('\\\\\\\\\\\\\\\\\?????????????????')
// console.log(controller.insertUser('fjim@gmail.com'));


// sequelize.sync().then(() => {

//     User.create({ email: "hane" }).then(res => {
//         console.log(res)
//     }).catch((error) => {
//         console.error('Failed to create a new record : ', error);
//     });

// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });

// const jane = User.build({ email: "Jane" });
// console.log(jane instanceof User); // true
// console.log(jane.email);
// jane.save()
// console.log('save jane')

// const users = User.findAll();
// console.log(users.every(user => user instanceof User)); // true
// console.log("All users:", JSON.stringify(users, null, 2));

const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8080;
const {sequelize, connectToDB} = require('./db')
const {User, Review, Listing} = require('./all.model')
const controller  = require('./all.controller.js')
const body_parser = require('body-parser')

const session = require('express-session');
const passport = require('passport');
require('./auth');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}
  
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
    })
);

app.get('/protected', isLoggedIn, (req, res) => {
    console.log('Hi ' + req.user.displayName)
    res.redirect('http://localhost:3000');
});

// app.get('/protected', isLoggedIn, (req, res) => {
//     res.send(`Hello ${req.user.displayName}`);
// });

app.get('/logout', isLoggedIn, (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.send('Goodbye!');
      });
});

app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});

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
    const listingsWithReviews = await Listing.findAll({
        include: [{ model: Review }],
    });
    // const listings = await Listing.findAll();
    // const reviews = await Review.findAll();
    res.status(200).json(listingsWithReviews);
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

app.get("/listings/:id", async (req, res) => {
    const listing = await Listing.findByPk(req.params.id)
    const reviews = await Review.findAll({
        where: {
            listing_id: req.params.id,
          },
    })
    res.status(200).json({listing, reviews});
})

app.post("/reviews/:listingId", async (req, res) => {
    const args = req.body

    try {
        // Assuming you have a listing with a specific listing_id
        const listingId = req.params.listingId; // Replace with the actual listing_id

        const newReview = await controller.insertReview(args.text_review,args.kitchen,args.tag,args.bathroom,args.parking,args.location,args.pet,args.storage,args.laundry, listingId, args.user_id)
        
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


app.post("/upload", controller.uploadFile.single("file"),controller.uploadFiles);  

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    connectToDB();
});

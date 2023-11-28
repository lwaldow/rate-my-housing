const { Sequelize, DataTypes } = require("sequelize");
const {User, Review, Listing,Image} = require('./all.model.js')
require('dotenv').config();

const multer = require("multer");



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

// sequelize.sync().then(() => {
//   console.log('review table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });

function insertUser(email){
    return User.create({
        email: email,
    }).catch((error) => {
        console.error('Failed to create a new user record : ', error);
    });
}

// function insertComplex(name,management){
//   return Complex.create({
//       name: name,
//       management: management,
//   }).catch((error) => {
//       console.error('Failed to create a new user record : ', error);
//   });
// }

function insertListing(name, management, state,town,zip,address){
  return Listing.create({
      name: name,
      management: management,
      state: state,
      town: town,
      zip: zip,
      address: address
  }).catch((error) => {
      console.error('Failed to create a new user record : ', error);
  });
}

function insertReview(text_review,kitchen,tag,bathroom,parking,location,pet,storage,laundry){
  return Review.create({
      text_review: text_review,
      kitchen: kitchen,
      tag: tag,
      bathroom: bathroom,
      parking: parking,
      location: location,
      pet: pet,
      storage: storage,
      laundry: laundry
  }).catch((error) => {
      console.error('Failed to create a new user record : ', error);
  });
}

function editReview(review_id,text_review,kitchen,tag,bathroom,parking,location,pet,storage,laundry,foreign_user_id){
  return User.update({
      text_review: text_review,
      kitchen: kitchen,
      tag: tag,
      bathroom: bathroom,
      parking: parking,
      location: location,
      pet: pet,
      storage: storage,
      laundry: laundry,
      foreign_user_id : foreign_user_id
    },{
      where: {
        review_id: review_id
      }
    }
  );
}

function searchReviews(kitchen_l=0,kitchen_h=6,bathroom_l=0,bathroom_h=6,parking_l=0,parking_h=6,location_l=0,location_h=6,pet_l=0,pet_h=6,storage_l=0,storage_h=6,laundry_l=0,laundry_h=6,tag=None){
  return Review.findAll({
    where: {
      kitchen: {[Op.between] : [kitchen_l, kitchen_h]},
      bathroom: {[Op.between] : [bathroom_l, bathroom_h]},
      parking: {[Op.between] : [parking_l, parking_h]},
      location: {[Op.between] : [location_l, location_h]},
      pet: {[Op.between] : [pet_l, pet_h]},
      storage: {[Op.between] : [storage_l, storage_h]},
      laundry: {[Op.between] : [laundry_l, laundry_h]},
      kitchen: {[Op.between] : [kitchen_l, kitchen_h]},
    }
  });
}

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });


const fs = require("fs");
const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/",
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports =  {insertUser, insertListing, insertReview, searchReviews, editReview, uploadFile, uploadFiles};

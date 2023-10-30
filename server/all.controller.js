const { Sequelize, DataTypes } = require("sequelize");
const {User, Review, Complex, Address} = require('./all.model.js')
require('dotenv').config();



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
    User.create({
        email: email,
    }).catch((error) => {
        console.error('Failed to create a new user record : ', error);
    });
}

function insertComplex(name,management){
  User.create({
      name: management,
      management: management,
  }).catch((error) => {
      console.error('Failed to create a new user record : ', error);
  });
}

function insertComplex(name,management){
  Complex.create({
      name: name,
      management: management,
  }).catch((error) => {
      console.error('Failed to create a new user record : ', error);
  });
}

function insertAddress(state,town,zip,address,address_id){
  Address.create({
      state: state,
      town: town,
      zip: zip,
      address: address
  }).catch((error) => {
      console.error('Failed to create a new user record : ', error);
  });
}

function insertReview(text_review,kitchen,tag,bathroom,parking,location,pet,storage,laundry){
  Review.create({
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

function editReview(review_id,text_review,kitchen,tag,bathroom,parking,location,pet,storage,laundry){
  User.update({
      text_review: text_review,
      kitchen: kitchen,
      tag: tag,
      bathroom: bathroom,
      parking: parking,
      location: location,
      pet: pet,
      storage: storage,
      laundry: laundry
    },{
      where: {
        review_id: review_id
      }
    }
  );
}

function searchReviews(kitchen_l=0,kitchen_h=6,bathroom_l=0,bathroom_h=6,parking_l=0,parking_h=6,location_l=0,location_h=6,pet_l=0,pet_h=6,storage_l=0,storage_h=6,laundry_l=0,laundry_h=6,tag=None){
  Review.findAll({
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

module.exports =  {insertUser, insertAddress, insertComplex, insertReview, searchReviews};
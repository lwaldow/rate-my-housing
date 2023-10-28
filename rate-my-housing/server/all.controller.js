const { Sequelize, DataTypes } = require("sequelize");
import {User, Address, Complex, Review} from all.model.js ;


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

sequelize.sync().then(() => {
  console.log('review table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

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
  User.create({
      name: name,
      management: management,
  }).catch((error) => {
      console.error('Failed to create a new user record : ', error);
  });
}

function insertAddress(state,town,zip,address,address_id){
  User.create({
      state: state,
      town: town,
      zip: zip,
      address: address
  }).catch((error) => {
      console.error('Failed to create a new user record : ', error);
  });
}

function insertReviews(text_review,kitchen,tag,bathroom,parking,location,pet,storage,laundry){
  User.create({
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
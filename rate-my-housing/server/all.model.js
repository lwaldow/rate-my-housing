const { Sequelize, DataTypes } = require("sequelize");


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


const User = sequelize.define("users", {
   email: {
     type: DataTypes.STRING,
   },
   user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
   }
});


sequelize.sync().then(() => {
   console.log('User table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

const Complex = sequelize.define("complexes", {
    name: {
      type: DataTypes.STRING,
    },
    management: {
     type: DataTypes.STRING,
    },
    complex_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    }
 });
 
 
 sequelize.sync().then(() => {
    console.log('complex table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


const Address = sequelize.define("addresses", {
    state: {
        type: DataTypes.STRING,
    },
    town: {
        type: DataTypes.STRING,
    },
    zip: {
        type: DataTypes.INTEGER,
    },
    address: {
        type: DataTypes.STRING,
    },
    address_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
   }
});

Complex.hasMany(Address, {
   foreignKey: {
     name: 'foreign_complex_id',
     type: DataTypes.UUID
   }
 });



sequelize.sync().then(() => {
   console.log('address table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});


const Review = sequelize.define("reviews", {
   text_review: {
       type: DataTypes.STRING(3000),
   },
   kitchen: {
       type: DataTypes.SMALLINT,
   },
   tag: {
       type: DataTypes.JSON,
       allowNull: true
   },
   bathroom: {
       type: DataTypes.SMALLINT,
   },
   parking: {
       type: DataTypes.SMALLINT,
   },
   location: {
       type: DataTypes.SMALLINT,
   },
   pet: {
       type: DataTypes.SMALLINT,
   },
   storage: {
       type: DataTypes.SMALLINT,
   },
   laundry: {
       type: DataTypes.SMALLINT,
   },
   review_id: {
     type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
     primaryKey: true,
  }
});

User.hasMany(Review, {
   foreignKey: {
     name: 'foreign_user_id',
     type: DataTypes.UUID
   }
 });


sequelize.sync().then(() => {
  console.log('review table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

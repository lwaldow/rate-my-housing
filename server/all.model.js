const { sequelize } = require("./db");
const {DataTypes} = require('sequelize');

// block 1

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

// block 2

const Listing = sequelize.define("listings", {
  name: {
    type: DataTypes.STRING,
  },
  management: {
    type: DataTypes.STRING,
  },
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
  listing_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
 });

// block 3

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

const Image = sequelize.define("images", {
    image_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image_data: { 
      type: DataTypes.BLOB('long'), // <- type for image ( database :postgresql )
      allowNull: true 
    },
});

User.hasMany(Review, {
   foreignKey: {
     name: 'foreign_user_id',
     type: DataTypes.UUID
   }
 });

 Review.hasMany(Image, {
  foreignKey: {
    name: 'foreign_review_id',
    type: DataTypes.UUID
  }
});

 Listing.hasMany(Review, {
  foreignKey: {
    name: "foreign_listing_id",
    type: DataTypes.UUID,
  },
});



module.exports = {User, Listing, Review,Image}
console.log('|||||||||||||||||||||')

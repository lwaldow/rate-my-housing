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
    type: DataTypes.STRING,
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

// const Review = sequelize.define("reviews", {
//    text_review: {
//        type: DataTypes.STRING(3000),
//    },
//    kitchen: {
//        type: DataTypes.SMALLINT,
//    },
//    tag: {
//        type: DataTypes.JSON,
//        allowNull: true
//    },
//    bathroom: {
//        type: DataTypes.SMALLINT,
//    },
//    parking: {
//        type: DataTypes.SMALLINT,
//    },
//    location: {
//        type: DataTypes.SMALLINT,
//    },
//    pet: {
//        type: DataTypes.SMALLINT,
//    },
//    storage: {
//        type: DataTypes.SMALLINT,
//    },
//    laundry: {
//        type: DataTypes.SMALLINT,
//    },
//    review_id: {
//      type: DataTypes.UUID,
//      defaultValue: DataTypes.UUIDV4,
//      primaryKey: true,
//   }
// });

const Review = sequelize.define("reviews", {
  text_review: {
      type: DataTypes.STRING(3000),
  },
  kitchen: {
      type: DataTypes.FLOAT, // or DataTypes.DOUBLE
  },
  tag: {
      type: DataTypes.JSON,
      allowNull: true,
  },
  bathroom: {
      type: DataTypes.FLOAT, // or DataTypes.DOUBLE
  },
  parking: {
      type: DataTypes.FLOAT, // or DataTypes.DOUBLE
  },
  location: {
      type: DataTypes.FLOAT, // or DataTypes.DOUBLE
  },
  pet: {
      type: DataTypes.FLOAT, // or DataTypes.DOUBLE
  },
  storage: {
      type: DataTypes.FLOAT, // or DataTypes.DOUBLE
  },
  laundry: {
      type: DataTypes.FLOAT, // or DataTypes.DOUBLE
  },
  review_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
 }
});


// const Image = sequelize.define("images", {
//     image_id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//       primaryKey: true,
//     },
//     image_data: { 
//       type: DataTypes.BLOB('long'), // <- type for image ( database :postgresql )
//       allowNull: true 
//     },
// });

User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

// Review.hasMany(Image, { foreignKey: 'review_id' });
// Image.belongsTo(Review, { foreignKey: 'image_id' });

Listing.hasMany(Review, { foreignKey: 'listing_id' });
Review.belongsTo(Listing, { foreignKey: 'listing_id' });



module.exports = {User, Listing, Review}
console.log('|||||||||||||||||||||')

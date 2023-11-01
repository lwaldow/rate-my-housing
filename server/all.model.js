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

User.hasMany(Review, {
   foreignKey: {
     name: 'foreign_user_id',
     type: DataTypes.UUID
   }
 });


module.exports = {User, Complex, Review, Address}
console.log('|||||||||||||||||||||')

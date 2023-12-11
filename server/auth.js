const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('./all.model.js')

const GOOGLE_CLIENT_ID = '1090364249707-810584hhv44musbr8c8kol606p36s4ss.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8080/auth/google/callback",
  passReqToCallback: true,
  },
  async function(request, accessToken, refreshToken, profile, done) {
      const newUser = {
          user_id: profile.id,
          displayName: profile.displayName,
          email: profile.emails ? profile.emails[0].value : null,
      };

      try {
          let user = await User.findOne({ where: { user_id: profile.id } });

          if (user) {
              done(null, user);
          } else {
              user = await User.create(newUser);
              done(null, user);
          }
      } catch (err) {
          console.error(err);
          done(err, null);
      }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:8080/auth/google/callback",
//   passReqToCallback: true,
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     const newUser = {
//       googleId: profile.id,
//       displayName: profile.displayName,
//       firstName: profile.name.givenName,
//       lastName: profile.name.familyName,
//       image: profile.photos[0].value,
//     }

//     try {
//       let user = User.findOne({ googleId: profile.id })

//       if (user) {
//         done(null, user)
//       } else {
//         user = User.create(newUser)
//         done(null, user)
//       }
//     } catch (err) {
//       console.error(err)
//     }
//   }));

// passport.serializeUser(function(user, done) {
// done(null, user);
// });

// passport.deserializeUser(function(user, done) {
// User.findById(id, (err, user) => done(err, user))
// });
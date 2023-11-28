const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '1090364249707-810584hhv44musbr8c8kol606p36s4ss.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback",
    passReqToCallback: true,
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
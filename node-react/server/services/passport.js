const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// user being passed in the one that is returned in done in passport.use
passport.serializeUser((user, done) => {
  // id assigned my mongo, so that gogle,fb auth can be done in one record
  done(null, user.id);
  // will be set as cookie
});

// convert serialized id to mongoose model
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  // google auth initialize
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // relative path causes http,as heroku servers go through proxy
      // proxy cant be trusted usually, but in this case its alright
      // callbackURL: '/auth/google/callback'
      callbackURL: "/auth/google/callback",
      // https remain if proxy
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // null means everything well alright
        return done(null, existingUser);
        // return daal diya to waise else ki zaroorat nahi hai
      } else {
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);

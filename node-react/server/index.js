const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(
  // google auth initialize
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // eslint-disable-next-line no-console
      console.log(accessToken);
    }
  )
);

app.get('/', (req, res) => {
  res.send({ hi: 'Holla' });
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', passport.authenticate('google'));

// To use the port heroku has decided for app
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT);

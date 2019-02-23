const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Add cookie support to express
app.use(
  cookieSession({
    // in millisecond
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// To use the port heroku has decided for app
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express = require('express');
const passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const app = express();

authRoutes(app);

// To use the port heroku has decided for app
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT);

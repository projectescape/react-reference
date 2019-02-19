const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'Holla' });
});

// To use the port heroku has decided for app
const PORT = process.env.PORT || 5000;
app.listen(PORT);

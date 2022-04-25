const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/users', require('./controllers/user.js').getUsers);

app.listen(PORT, () => {
  console.log('Running on port ' + PORT);
});

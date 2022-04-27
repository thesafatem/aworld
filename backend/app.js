require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/auth', require('./routers/auth.js'));
app.use('/comments', require('./routers/comment.js'));
app.use('/posts', require('./routers/post.js'));
app.use('/users', require('./routers/user.js'));

app.listen(PORT, () => {
  console.log('Running on port ' + PORT);
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.use('/auth', require('./routers/auth.js'));
app.use('/comments', require('./routers/comment.js'));
app.use('/posts', require('./routers/post.js'));
app.use('/users', require('./routers/user.js'));

app.listen(PORT, () => {
  console.log('Running on port ' + PORT);
});

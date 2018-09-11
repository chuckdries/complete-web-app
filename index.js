const express = require('express');
const app = express();
const sqlite = require('sqlite');

const posts = require('./routes/posts');

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

app.use(require('body-parser').urlencoded({ extended: true }));

const dbPromise = sqlite.open('./data.sqlite');

app.get('/', async function (req, res){
  res.redirect('/posts');
});

app.use('/posts', posts);

app.listen(3000);
console.log('listening on 3000')

const express = require('express');
const app = express();
const sqlite = require('sqlite');
const passport = require('passport');
var Strategy = require('passport-local').Strategy;

const posts = require('./routes/posts');

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

app.use(require('body-parser').urlencoded({ extended: true }));

const dbPromise = sqlite.open('./data.sqlite');

app.get('/', async function (req, res){
  const db = await dbPromise;
  const posts = await db.all('SELECT * FROM Posts');
  res.render('index',{title: 'Messages for the void', posts});
});

app.use('/posts', posts);

app.listen(3000);
console.log('listening on 3000')

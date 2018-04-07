const express = require('express');
const app = express();
const sqlite = require('sqlite');

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

app.use(require('body-parser').urlencoded({ extended: true }));


var planets = ['moon', 'sun', 'earth'];

const dbPromise = sqlite.open('./data.sqlite');

app.get('/', async function (req, res){
  const db = await dbPromise;
  const posts = await db.all('SELECT * FROM Posts');
  console.log(posts);
  res.render('index',{title: 'Posts', posts: posts});
});

app.get('/foobar', function(req, res){
  res.send('goober');
})

app.post('/posts', async function(req, res){
  const newPost = req.body;
  const db = await dbPromise;
  db.run(`INSERT INTO Posts (
          author,
          message
         )
          VALUES (
            '${newPost.author}',
            '${newPost.message}'
          )`
  );
  res.redirect('/');
})


app.listen(3000);
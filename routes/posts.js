var express = require('express')
var router = express.Router()
const sqlite = require('sqlite');

const posts = require('../db/posts');

// const dbPromise = sqlite.open('./data.sqlite');

router.get('/', async function(req, res) {
  const data = await posts.getAll();
  res.render('posts',{title: 'Posts', posts: data});
});

router.post('/', async function(req, res){
  const newPost = req.body;
  await posts.insert(newPost);
  res.redirect('/posts');
})

router.get('/:id', async function(req, res) {
  const data = await posts.getById(req.params.id);
  if(!data){
    res.send(404);
  } else {
    // the [data] syntax simply takes our single post and turns it into a one-post array, which our template expects
    res.render('posts',{title: `Post number ${req.params.id}`, posts: [data], isOnPostPage: true});
  }
})

router.get('/:id/delete', async function(req, res){
  await posts.deleteById(req.params.id);
  res.redirect('/posts');
})

module.exports = router;

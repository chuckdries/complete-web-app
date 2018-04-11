var express = require('express')
var router = express.Router()
const sqlite = require('sqlite');

const posts = require('../db/posts');

const dbPromise = sqlite.open('./data.sqlite');

router.get('/', async function(req, res) {
  const data = await posts.getAll();
  res.render('index',{title: 'Posts', posts: data});
});
router.post('/', async function(req, res){
  const newPost = req.body;
  const db = await dbPromise;
  await posts.insert(newPost);
  res.redirect('/');
})

router.get('/:id', async function(req, res) {
  const data = await posts.getById(req.params.id);
  res.render('index',{title: 'Posts', posts: [data]});
})

router.get('/:id/delete', async function(req, res){
  await posts.deleteById(req.params.id);
  res.redirect('/');
})

module.exports = router;
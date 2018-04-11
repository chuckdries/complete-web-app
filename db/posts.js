const sqlite = require('sqlite');

const dbPromise = sqlite.open('./data.sqlite');

module.exports.getAll = async function() {
  const db = await dbPromise;//wait for database
  const posts = await db.all('SELECT * FROM Posts');
  console.log(posts);
  return posts;
}

module.exports.insert = async function(post){
  const db = await dbPromise;
  db.run(`INSERT INTO Posts (
          author,
          message
         )
          VALUES (
            '${post.author}',
            '${post.message}'
          )`
  );
  return;
}

module.exports.getById = async function(id) {
  const post = await db.get(`SELECT * FROM Posts WHERE id=${id}`);
  return post;
}
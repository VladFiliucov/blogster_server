var express = require('express');
var app = express();

var cors = require('cors');

var posts = require('./data').posts;

app.use(cors());

app.get('/posts', function(req, res) {
  res.json(posts);
});

app.get('/posts/:id', function(req, res) {
  var postId = req.params.id
  var result = posts.find(post => post.id == postId)
  res.json(result);
});

app.listen(3000, function() {
  console.log("Listening to port 3000");
})


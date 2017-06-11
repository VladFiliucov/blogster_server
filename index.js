var express = require('express');
var app = express();

var cors = require('cors');

var posts = require('./data').posts;

app.use(cors());

app.get('/posts/', function(req, res) {
  if (req.query.search) {
    var searchTerm = req.query.search;
    var result = posts.filter(post => {
      return post.text.toLowerCase().indexOf(searchTerm.toLowerCase()) > - 1;
    });
    return res.json(result);
  } else {
    res.json(posts);
  }
});

app.get('/posts/:id', function(req, res) {
  var postId = req.params.id
  var result = posts.find(post => post.id == postId)
  res.json(result);
});


app.listen(3000, function() {
  console.log("Listening to port 3000");
})


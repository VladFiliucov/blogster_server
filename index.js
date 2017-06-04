var express = require('express');
var app = express();

var cors = require('cors');

var posts = require('./data').posts;

app.use(cors());

app.get('/', function(req, res) {
  res.json(posts);
});

app.listen(3000, function() {
  console.log("Listening to port 3000");
})


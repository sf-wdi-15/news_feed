var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

var articles = [];

app.get('/articles', function(req,res) {
  res.render('articles/index');
});

app.get('/articles/new', function(req,res) {
  res.render('articles/new');
});

app.post('/articles', function(req,res) {

});

app.get('/', function(req,res) {
  res.render('site/index.ejs');
});

app.get('/about', function(req,res) {
  res.render('site/about');
});

app.get('/contact', function(req,res) {
  res.render('site/contact');
});

app.listen(3000, function() {
  console.log('Listening');
});

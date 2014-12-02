var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var articles = [{title: 'Wanderer', content: 'This is an article its really good. You should read it!.'}, {title: 'Whats new in Serial!', content: 'Spoilers not going to talk about it here so I dont ruin it for others'}];

app.get('/articles', function(req,res) {
  res.render('articles/index', {articlesList: articles});
});

app.get('/articles/new', function(req,res) {
  res.render('articles/new');
});

app.post('/articles', function(req,res) {
  console.log(req.body);
  articles.push(req.body.article);
  res.redirect('/articles');

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

// load dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8080;
app.set("view engine", "ejs");

// setup local "database" for testing purposes
var articles = [{id: 1, title: "Californication", author: "John Fruciante", body: "here is articles body text", date: "December, 25 2014"}, 
             {id: 2, title: "Star Wars", author: "George Lucas", body: "here is articles body text", date: "December, 25 2014"},
             {id: 3, title: "Memento", author: "‎Keyser Söze", body: "here is articles body text", date: "December, 25 2014"},
             {id: 4, title: "The Rock", author: "St. Nicolas Cage", body: "here is articles body text", date: "December, 25 2014"}];

//******************************
//  site routes
//******************************/

//site - get
app.get("/", function(req, res){
  res.render("site/index.ejs");
});
app.get("/about", function(req, res){
  res.render("site/about.ejs");
});
app.get("/contact", function(req, res){
  res.render("site/contact.ejs");
});

//******************************
//  article routes
//******************************/

// articles - get
app.get("/articles", function(req, res){
  res.render("articles/index.ejs", {articleList: articles});
});
app.get("/articles/new", function(req, res){
  res.render("articles/new.ejs");
});
app.get("/articles:id", function(req, res){
  app.res("articles/id", {articleList: articles});
});

// articles - post
app.post("/articles", function(req, res){
  articles.push(req.body);
  res.redirect("/articles");
});

//******************************
//  start server
//******************************/
app.listen(port, function(req, res){
  console.log("listening");
});
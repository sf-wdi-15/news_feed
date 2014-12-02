var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var articles = [{title: "The Giver", author: "Louis Lowry", body: "here is articles body text"}, 
             {title: "Star Wars", author: "George Lucas", body: "here is articles body text"},
             {title: "Memento", author: "James Caufield", body: "here is articles body text"},
             {title: "The Escape", author: "David Baldacci", body: "here is articles body text"}];
app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");

//site - get
app.get("/", function(req, res){
  res.render("site/index.html");
});
app.get("/about", function(req, res){
  res.render("site/about.html");
});
app.get("/contact", function(req, res){
  res.render("site/contact.html");
});

// articles - get
app.get("/articles", function(req, res){
  res.render("articles/index.ejs");
});
app.get("/articles/new", function(req, res){
  res.render("articles/new.ejs");
});
app.get("/articles:id", function(req, res){
  app.res("articles/id");
});
// articles - post
app.post("", function(req, res){
  app.post()
});

// start server
app.listen(3000, function(req, res){
  console.log("listening");
});
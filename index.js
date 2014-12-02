// load dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");

// setup local "database" for testing purposes
var articles = [{id: 1, title: "The Giver", author: "Louis Lowry", body: "here is articles body text"}, 
             {id: 2, title: "Star Wars", author: "George Lucas", body: "here is articles body text"},
             {id: 3, title: "Memento", author: "James Caufield", body: "here is articles body text"},
             {id: 4, title: "The Escape", author: "David Baldacci", body: "here is articles body text"}];

//******************************
//  site routes
//******************************/

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

//******************************
//  article routes
//******************************/

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
app.post("/articles", function(req, res){
  articles.push(req.body);
  res.redirect("/articles");
});

//******************************
//  start server
//******************************/
app.listen(3000, function(req, res){
  console.log("listening");
});
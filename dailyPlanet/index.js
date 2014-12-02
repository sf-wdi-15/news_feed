var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var articles = [{title:"articleOne", author: "some One"},
				{title:"articleTwo", author: "another person"},
				{title:"articleThree", author: "someone else"}];


app.use(bodyParser.urlencoded());
app.set("view engine","ejs");
		//url
app.get("/articles/index", function(req,res){
	res.render("articles/index.ejs")
				//folder structure
});
//http://localhost:3000/articles/index

app.get("/articles/new", function(req,res){
	res.render("articles/new.ejs")
});


app.get("/site", function (req,res){
	res.render("site/index.ejs")
});

app.get("/articles/new", function (req,res){
	res.render("articles/new.ejs");
});

app.get("/site/index", function (req,res){
	res.render("site/index.ejs");
});

app.get("/site/about", function (req,res){
	res.render("site/about.ejs");
});

app.get("/site/contact", function (req,res){
	res.render("site/contact.ejs");
});





app.listen(3000,function(){
	console.log ("Listening");
});
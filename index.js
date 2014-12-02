// index.js
// load express module
var express = require("express");
// create an app
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");

var articles = [{title:"Lex Luthor Strikes Again!", title:"Superman Nowhere to Be Found", title:"World Leaders Clueless As Usual"}];

app.get("/articles", function (request, response) {
	response.render("articles/index.ejs", {articleList: articles});
});

//app.get("/articles/index.ejs", function (request , response) {
//	response.render("articles/index.ejs", {articleList: articles});
//});

app.get("/articles/new", function (request, response) {
	response.render("articles/new.ejs");
});

app.post("/articles", function (request, response) {
	console.log(request.body);

	articles.push(req.body);
	request.redirect("/articles");
});

app.get("/", function (request, response) {
    response.render("/index.ejs");
});

app.get("/about", function (request, response) {
	response.render("/about.ejs");
});

app.get("/contact", function (request, response) {
	response.render("/contact.ejs");
});


app.listen(3000, function () {
	console.log("Listening");
});

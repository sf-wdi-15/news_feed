var express = require('express'),
app = express(),
ejs = require('ejs'),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs');

var articles = [ {title: "Thanks Obama", content: "Environment, healthcare, gay rights"},
{title: "Thanksgiving", content: "families, food, alcohol"},
{title: "Iraq", content: "still there"}];

app.get("/articles", function (req, res) {
	res.render("articles/index.ejs", {articleList: articles});
});

app.get("/articles/new", function (req, res) {
	res.render("articles/new.ejs");
});

app.post("/articles", function (req, res) {
	console.log(req.body);

	articles.push(req.body);
	res.redirect("/articles");
});

app.get("/site", function (req, res){
	res.render("site/index.ejs");
});

app.get("/site/about", function (req, res){
	res.render("site/about.ejs");
});

app.get("/site/contact", function (req, res){
	res.render("site/contact.ejs");
});


app.listen(3000, function(){
	console.log("Visit localhost:3000");
});
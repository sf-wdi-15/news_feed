var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");

var articles = [{title: "Police: Rams apologized. Rams: No, we didn't.", summary: "The team says it had discussions with police after some players raised their hands in solidarity with Ferguson protesters, but they couldn't agree that it was an apology."},
				{title: "How 'Star Wars' ruined sci-fi.", summary: "Now that the trailer for the seventh 'Star Wars' movie is out, you can imagine the anticipation among the millions of fans of the film franchise. And why not? The six 'Star Wars' films have been enormous successes: they have grossed over $2 billion domestically at the box office, spawned scores of books, comic books and merchandise (how many kids have their own light saber?) and made household names of characters like Darth Vader, Han Solo and Luke Skywalker. They've also been the worst thing ever for the science fiction genre."},
				{title: "Oil prices plunge to 5-year low", summary: "Oil prices plunged to their lowest level in five years Monday, piling pressure on Russia and other producers and raising the risk of deflation in Europe."}];

app.get("/articles", function (req, res) {
	res.render("articles/index", {articlesList: articles});
});

app.get("/articles/new", function (req, res) {
	res.render("articles/new");
});

app.post("/articles", function (req, res) {
	console.log(req.body);
	articles.push(req.body.article);
	res.redirect("/articles");
});

app.get("/", function (req, res) {
	res.render("site/index");
});

app.get("/about", function (req, res) {
	res.render("site/about");
});

app.get("/contact", function (req, res) {
	res.render("site/contact");
});

app.listen(3000, function(){
	console.log("YES?");
});
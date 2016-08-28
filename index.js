var express = require("express");
var app = express();
var complimentModule = require('./controllers/compliments.js');
var hbs = require('express-handlebars');

app.set("view engine", 'hbs');
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLAyout: "layouts"
}))
app.use(express.static(__dirname + '/public'))

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

app.get("/", function(req, res){
  var compliments =[
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
  res.render("index", {compliments: compliments});;
});

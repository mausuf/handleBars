// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var mysql = require("mysql");
var mysql2 = require("mysql2");

var app = express();

// Made port dynamic for deployment
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded ({
    extended: false
}));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/routes"); // Reference routes.js
app.use("/", routes); // Reference routes.js


app.listen(PORT);
console.log("App connected to port " + PORT);
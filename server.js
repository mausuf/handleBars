// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var mysql = requre("mysql");
var mysql2 = require("mysql2");

var app = express();
app.use(express.static(_dirname + "/public"));

app.use(bodyParser.urlencoded ({
    extended: false
}));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var port = 3000;
app.listen(port);


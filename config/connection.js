var mysql = require("mysql");

//Setup
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Qwerty555!",
  database: "burgers_db"
});

connection.connect(function(err) {
  if(err) throw err;
  console.log("connected as id: " + connection.threadid);
});


// Export Connection from here, and import from orm.js
module.exports = connection;


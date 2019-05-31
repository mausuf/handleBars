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


var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    })
};

var mysql = require('mysql');



// Export Connection from here, and import from orm.js
module.exports = connection;


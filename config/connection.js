var mysql = require("mysql");

//Setup
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Qwerty555!",
//   database: "burgers_db"
// });




// var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = "mysql://f9zt2se63r1afzju:m981tqgrzrc82sv7@ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/duiagmx2lgm7kex8";
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "Qwerty555!",
        database: "burgers_db"
    })
};

connection.connect(function(err) {
  if(err) throw err;
  console.log("connected as id: " + connection.threadid);
});

// Export Connection from here, and import from orm.js
module.exports = connection;


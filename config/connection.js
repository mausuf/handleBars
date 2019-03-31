var mysql = require("mysql");

//Setup
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Qwerty555!",
  database: "burgersDb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  //Always keep /.end otherwise it will stay connected
  connection.query("select * from burgers", function(error,results) {
    if (error) throw error;
    console.log(results);
    connection.end();
  });
});

module.exports = connection;


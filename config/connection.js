var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Setup
  port: 3306,
  user: "root",
  password: "Qwerty555!",
  database: "burgersDb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //Always keep /.end otherwise it will stay connected
  connection.query("select * from burgers", function(error,results) {
    if (error) throw error;
    console.log(results);
    connection.end();
  });
});

var connection = require("./connection");

// Object Relational Mapper (ORM)
var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err,result){
            if(err) throw err;
            cb(result)
        })
    },

    // Update method orm
    update: function(tableInput, condition, cb){
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function(err,result){
            if(err) throw err;
            cb(result);
        })
    },


};

// models folder requires orm
module.exports = orm;


// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//Call Burger
var burger = {
    all: function(cb){    // 
        orm.all("burgers", function(res){    // calling orm.all; inserting burgers as table input; running function response as callback that will be sent into routes.js
            cb(res);
        })
    },

    // Update
    update: function(id, cb){
        orm.update("burgers", id, cb);
    },


};


module.exports = burger;
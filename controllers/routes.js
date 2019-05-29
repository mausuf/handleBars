var express = require("express");
var router = express.Router();
var burger = require("../models/burger")

router.get("/", function(req, res){
    burger.all(function(burger_data){  // pass burger data into function
        console.log(burger_data);
        res.render("index",{burger_data});  // {burger_data} required here to display the data on app
    });
});

// Update burgers using PUT route
router.put("/burgers/update", function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;
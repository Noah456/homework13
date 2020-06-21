var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req,res){
    burger.all(function(burgerData){   
    res.render("index", {burger_data: burgerData})

});
})


router.put("/burgers/:id", function(req,res){

    var id = req.params.id;

    burger.update(id, function(result){

        console.log(result);
        res.send("updated");
    })
})


module.exports = router;
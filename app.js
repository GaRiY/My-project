var express = require("express");
var app = express();
var Bear = require("./jss/aclass");
var Wolf = require("./jss/gclass");
var Cow = require("./jss/kclass");
var Human = require("./jss/mclass");
var Grass = require("./jss/xclass");

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public/index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
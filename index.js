var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var complimentsController = require("./controllers/complimentsController");
var methodOverride = require("method-override")

app.use(methodOverride('_method'))
app.use(bodyParser.json());//
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// index
app.get("/compliments", complimentsController.index);

// root
app.get("/", function(req, res){
  res.redirect("/compliments")
});

// create
app.post("/compliments", complimentsController.create);

// new
app.get("/compliments/new", complimentsController.new);

// show
app.get("/compliments/:id", complimentsController.show);

app.get("/compliments/:id/edit", complimentsController.edit);


// edit
  // edit route code goes here...

// update
 // update route code goes here...

// Run our app on Port 3000
app.listen(3000, function(){
  console.log("Listening on http://localhost:3000/");
})

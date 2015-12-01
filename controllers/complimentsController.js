var Compliment = require("../models/compliment");
var complimentsController = {
  index: function(req, res){
    res.render('compliments/index.hbs', {
      compliments: Compliment.all()
    });
  },
  show: function(req, res){
    res.render('compliments/show.hbs',{
      compliment: Compliment.find([req.params.id])
    });
  },
  new: function(req, res){
    res.render('compliments/new.hbs');
  },
  create: function(req, res){
    // use model to create compliment
    var compliment = Compliment.create(req.body.compliment)
    // redirect to compliment
    res.redirect("/compliments")
  },
  // edit action code goes here...
  edit: function(req, res){
<<<<<<< HEAD
    res.send("No editing allowed");
  }
  // edit action code goes here...
=======
    res.redirect("/compliments")
  },
>>>>>>> af11f44aff9c6da3de83671bc8a173bd1b5a8546

 // update action code goes here...
 update: function(req, res){
   res.send("Got 'em!");
 }
}

module.exports = complimentsController;

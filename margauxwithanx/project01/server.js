// server.js

// require express framework and additional modules
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// middleware
//CHECKME app.use(express.static('public'));
//CHECKME app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// pull in models
var mongoose    = require('mongoose');
// connect to database
// ECONNREFUSED port 27017 -- mongod is not running
// run mongod in another Terminal tab
mongoose.connect('mongodb://localhost/travelmate-login');

var User = require ('./models/user.js');


// define REST endpoints (routes)
var router = express.Router();

app.use('/api', router);  // prefix all endpoints with /api

router.route('/users')

  // curl -H "Content-Type: application/json" -X POST -d '{"firstname":"aaron", "lastname":"cody", "email":"aaron@aaron.com", "passwordDigest":"djhgfdshgfjhdg"}' http://192.168.0.125:8080/api/users/
  .post(function(req,res){  // creates new user

    var user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.passwordDigest = req.body.passwordDigest;

    user.save(function(err){
      if (err)
        res.send(err);

      var msg = 'creating new user...'+user.firstname;
      res.json({message: msg});
      console.log(msg);

    });

  })

  // curl -X GET http://192.168.0.125:8080/api/users/
  .get(function(req,res){   // gets all users

    User.find(function(err, users){
      if (err)
        res.send(err);

      var msg = 'getting all users...:'+users;
      console.log(msg);

      res.json(users);
    });

  });

router.route('/users/:user_id')

  // curl -X GET http://192.168.0.125:8080/api/users/562c59bb3a7ac1210abd150c/
  .get(function(req,res){   // gets user by id

    User.findById(req.params.user_id, function(err, user){
      if (err)
        res.send(err);

      var msg = 'getting user by id...:'+user;
      console.log(msg);

      res.json(user);
    });


  })

  // curl -H "Content-Type: application/json" -X PUT -d '{"firstname" : "fred"}' http://192.168.0.125:8080/api/users/562c59bb3a7ac1210abd150c/
  .put(function(req,res){   // update user by id

    User.findById(req.params.user_id, function(err, user){
      
      if (err)
        res.send(err);

      if(req.body.firstname)
        user.firstname = req.body.firstname;

      if(req.body.lastname)
        user.lastname = req.body.lastname;

      if(req.body.email)
        user.email = req.body.email;

      if(req.body.passwordDigest)
        user.passwordDigest = req.body.passwordDigest;

      user.save(function(err){
        if (err)
          res.send(err);

        var msg = 'updated user...'+user.firstname;
        res.json({message: msg});
        console.log(msg);

      });

    });

  })

  // curl -X DELETE http://192.168.0.125:8080/api/users/562c59bb3a7ac1210abd150c/
  .delete(function(req,res){   // delete user by id

    User.remove({_id:req.params.user_id}, function(err, user){

      if (err)
        res.send(err);

      var msg = 'deleted user...'+req.params.user_id;
      res.json({message: msg});
      console.log(msg);

    });

  });

// Routes for places go here :.......



app.listen(port, function () {
  console.log('server started on locahost:'+port);
});
// user.js

// require dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);


// define user schema
var UserSchema = new Schema({
   firstname: String,
   lastname: String,
   email: String,
   passwordDigest: String
});

// create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (firstname, lastname, email, password, callback) {
  // `this` references our schema 
  // store it in variable `user` because `this` changes context in nested callbacks
  var user = this;
    console.log("this inside createSecure:", user);

  // hash password user enters at sign up
  bcrypt.genSalt(10,function (err, salt) {
    //console.log('salt: ', salt);  // changes every time
    bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);

      // create the new user (save to db) with hashed password
      user.create({ //Looks like Model
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hash
      }, callback);
    });
  });
};

// authenticate user (when user logs in)
UserSchema.statics.authenticate = function (firstname, lastname, email, password, callback) {
  // find user by email entered at log in
  this.findOne({email: email}, function (err, user) {
    console.log(user);

    // throw error if can't find user
    if (!user) {
      console.log('No user with email ' + email);

    // if found user, check if password is correct
    } else if (user.checkPassword(password)) {
      callback(null, user);
    } else {
      callback ("Error: incorrect password", null);
    }

  });
};

// compare password user enters with hashed password (`password`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password user enters in order to compare with `password`
  return bcrypt.compareSync(password, this.password);
};


// // export user model// define user model; need the above before can turn it into a model
module.exports = mongoose.model('User', UserSchema);

// // export user model
// module.exports = User;
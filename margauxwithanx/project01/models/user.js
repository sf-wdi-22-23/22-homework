// user.js

// require dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//   bcrypt = require('bcrypt'),
//   salt = bcrypt.genSaltSync(10);

//   // define user schema
var UserSchema = new Schema({
   firstname: String,
   lastname: String,
   email: String,
   passwordDigest: String
});

// // create a new user with secure (hashed) password
// UserSchema.statics.createSecure = function (email, password, callback) {
//   // `this` references our schema (??MODEL??)
//   // store it in variable `user` because `this` changes context in nested callbacks
//   console.log("this inside createSecure:", this);
//   var user = this;

//   // hash password user enters at sign up
//   bcrypt.genSalt(function (err, salt) {
//     bcrypt.hash(password, salt, function (err, hash) {
//       console.log(hash);

//       // create the new user (save to db) with hashed password
//       user.create({ //Looks like Model
//         email: email,
//         passwordDigest: hash
//       }, callback);
//     });
//   });
// };

// // authenticate user (when user logs in)
// UserSchema.statics.authenticate = function (email, password, callback) {
//   // find user by email entered at log in
//   this.findOne({email: email}, function (err, user) {
//     console.log(user);

//     // throw error if can't find user
//     if (!user) {
//       console.log('No user with email ' + email);

//     // if found user, check if password is correct
//     } else if (user.checkPassword(password)) {
//       callback(null, user);
//     }
//   });
// };

// // compare password user enters with hashed password (`passwordDigest`)
// UserSchema.methods.checkPassword = function (password) {
//   // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
//   return bcrypt.compareSync(password, this.passwordDigest);
// };

// // define user model; need the above before can turn it into a model

// // export user model
module.exports = mongoose.model('User', UserSchema);
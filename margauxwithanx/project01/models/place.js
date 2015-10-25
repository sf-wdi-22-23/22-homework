// placejs

// require dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define user schema
var PlaceSchema = new Schema({
   locationCoordinates: String,
   city: String,
   type: String,
   creator: String,
   notes: String,
   cost: String,
   rating: String,
   url: String
});

module.exports = mongoose.model('Place', PlaceSchema);
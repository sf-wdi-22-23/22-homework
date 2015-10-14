$(document).ready(function(){

var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
    zoom: 13,
    styles: [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}]
  });


// Create a variable gaMarker and 
// assign a new new google.maps.Marker() 
// using the code linked below.
// At minimum you need a position, map and title.


  var gaMarker = new google.maps.Marker({
    position: {lat: 37.790841, lng: -122.401280},
    map: map,
    title: 'Hello GA San Francisco!'
  });



/*
Create a variable to store a string
pointing to your icon.
(It should be "ga_cog.png")
Add an attribute icon to your Marker object
and assign the variable storing the string.
*/
  var gaIcon = 'https://github.com/sf-wdi-22-23/modules/blob/master/w02-working-with-objects/d3-homework/starter-code/ga_cog.png?raw=true';
  var iconMarker = new google.maps.Marker({
    position: {lat: 37.790841, lng: -122.401280},
    map: map,
    icon: gaIcon
  });
}	
	initMap();
});







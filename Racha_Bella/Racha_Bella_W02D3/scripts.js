var map;
var myLatLng = {lat: 37.7911123, lng: -122.4013338};
var img = "ga_cog.png";
var contentString = '<h2>General Assembly</h2>' +
'<p><strong>General Assembly is the best school ever where people from all over the world can come and learn the best from the best</p>' + 
'<p> People there are so nice and friendly</p> ' + '<p> I have already made a cool friend :D</p>' + '<img src="img.jpg">';

function initMap() {

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: myLatLng,  // General Assembly, SF
    zoom: 17
  });
  styles=[{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]

  map.setOptions({styles: styles});
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'GA!',
    icon :img,
    

  });
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  	marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}



$(document).ready(function() {
	initMap();
	
});

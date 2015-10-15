$(document).ready(function() {
	
	var map;
	function initMap() {
		var myLatLng = {lat: 37.790841, lng: -122.401280};

	 	var customMapType = new google.maps.StyledMapType([{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}], {name: 'Custom style'});
	 	var customStyleId = 'custom_style';

	 	// 1. custom style
	 	map = new google.maps.Map(document.getElementById('map-canvas'), {
	    center: myLatLng,  // General Assembly, SF
	    zoom: 8,
	    mapTypeControlOptions: {
      	mapTypeIds: [google.maps.MapTypeId.ROADMAP, customStyleId]
    	}	
	 	});

	 	map.mapTypes.set(customStyleId, customMapType);
  	map.setMapTypeId(customStyleId);

  	// 2. simple marker
	 	var marker = new google.maps.Marker({
	 		position: myLatLng,
	 		map: map,
	 		title: 'San Francisco'
	 	});

	 	// 3. simple marker icon
	 	var houseImage = 'house.png';
	 	var houseLatLng = {lat: 37.773978, lng: -122.447886};
	 	var houseMarker = new google.maps.Marker({
	 		position: houseLatLng,
	 		map: map,
	 		title: 'Your house',
	 		icon: houseImage
	 	});

	 	// 4. info window on San Francisco
	 	var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">San Francisco</h1>'+
      '<div id="bodyContent">'+
      '<p><b>San Francisco</b>, officially the City and County of San Francisco, is the cultural, commercial, and financial center of Northern California and the only consolidated city-county in California. San Francisco encompasses a land area of about 46.9 square miles (121 km2) on the northern end of the San Francisco Peninsula, which makes it the smallest county in the state.'+
      '</p>'+
      '<p>Attribution: San Francisco, <a href="https://en.wikipedia.org/wiki/San_Francisco">'+
      'https://en.wikipedia.org/wiki/San_Francisco</a> '+
      '(last visited October 7, 2015).</p>'+
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
    	content: contentString
 		 });

    marker.addListener('click', function() {
    	infowindow.open(map, marker);
  	});

	 }
	initMap();

});
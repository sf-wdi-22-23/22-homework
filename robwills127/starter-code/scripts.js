var map;
var genAss = {lat: 37.790841, lng: -122.401280};  // General Assembly, SF

function initMap() {

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: genAss,
    zoom: 13,
    styles: [
			    {
			        "featureType": "administrative",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#181818"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#e2e2e2"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "all",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "lightness": "6"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            },
			            {
			                "lightness": "-47"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#ae112a"
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    }
			]
  	});


	var marker = new google.maps.Marker({
    position: {lat: 37.790841, lng: -122.401280},
    map: map,
    title: "General Assembly"
  	});

	var image = 'ga_cog.png';
  	var gaMarker = new google.maps.Marker({
    position: {lat: 37.790841, lng: -122.401280},
    map: map,
    icon: image
  	});

  	var contentString = '<h2>General Assembly</h2>' + '<p>Established in early 2011 as an innovative community in New York City for entrepreneurs and startup companies, General Assembly is an educational institution that transforms thinkers into creators through education in technology, business and design at fourteen campuses across four continents.</p>';
  	var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  	marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}

initMap();









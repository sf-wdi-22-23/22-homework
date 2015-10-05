$(document).ready(function(){
	var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'Ryu-hadouken.mp3');

	$('#button1').hover(function(){
		$('body').css('background', 'url(http://7-themes.com/data_images/out/26/6858396-nice-backgrounds.jpg) center no-repeat');
		$('body').append('<p>I can change background image just like i want to</p>')
	},

		function(){
			$('body').css('background','url(http://i.imgur.com/Cf73csA.jpg)');
			$('p').remove()



	});

	$('#button2').hover(function(){
		$('body').append('<p>I can add as many pictures as I want and make them seem like mooving</p>');
		$('body').css('background', 'url(http://www.slimeland.com/images/pictures/Cubes.jpg) center no-repeat');
	}, 
		function(){
			$('p').remove();
		}
	);

	$('#button3').mousedown(function(){
		$('.container').slideToggle('slow');
		$("#button3").text('Click me again');
		$('body').append('<p>Sliding up and down</p>');
		$('p').remove();

	}
	);

	$('li:first').click(function(){

	$('li:first').fadeIn( "slow" );
	$('li:first').fadeOut( "slow" );

	});

	$('li:last').click(function(){
		
	$('li:last').fadeToggle( "slow", "linear" );
	$('body').css('background', 'url(http://www.ukfests.co.uk/wp-content/uploads/2012/03/117633-1920x1200.jpg)');

	});



	$('#div1 #img1').hover( function() {

     this.src = 'http://i.imgur.com/nTj3Fxx.gif'
}, function() {
    this.src = 'http://i.imgur.com/90Mmdcm.png'
});


	$('#div1 #img1').mousedown( function() {
		this.src ="http://i.imgur.com/Rfj0a80.png";
		audioElement.play();
		$('#img2').show();
		$('#img2').animate( {
        "margin-left": "100px"
    }, 1000, 'swing', 
    function() {
        this.remove();
	}
	);
});
	
$('#div1 img').mouseup(function() {
    this.src = 'http://i.imgur.com/90Mmdcm.png'
})

});
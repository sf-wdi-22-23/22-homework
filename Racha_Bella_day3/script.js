$(document).ready(function(){


	 $('#button1').click(function(){
	 	$('img').fadeOut('slow');

	 });
	 $('#button2').click(function(){
	 	$('img').fadeIn(3000);

	 });

	 $('#button3').click(function(){
	 	var $p= $('p');
	 	$('#after').append($p);

	 });




});
alert('loaaaaaaaaaaded');
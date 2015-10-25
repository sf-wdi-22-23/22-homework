// /public/scripts.js

$(document).ready(function() {
	

	var $signupForm = $("#signup-form");
	$signupForm.on('submit', function(e){
		e.preventDefault();
		var user = $("#signup-form").serialize();
		  $.post('/users', user, function(data){
		  	// console log server's response
		    console.log(data);
		});
	});


});
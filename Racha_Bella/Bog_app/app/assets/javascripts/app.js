$(document).ready(function () {

	/*$(".btn-lg").on('click', function  (argument) {
		$('html, body').animate({
	           scrollTop: $("#myCarousel").offset().top
	       }, 500);
		// body...
	});*/
	$("#editButton").on('click', function(){
		console.log('clicked')
		label = $("#creature_name").prev('label');
		label.addClass('active highlight');
		console.log('label is', label)

		label = $("#creature_image").prev('label');
		label.addClass('active highlight');

		label = $("#creature_property").prev('label');
		label.addClass('active highlight');

	});

	$('.form').find('input, textarea').on('keyup blur focus', function (e) {
	  
	  var $this = $(this),
	      label = $this.prev('label');

		  if (e.type === 'keyup') {
				if ($this.val() === '') {
	          label.removeClass('active highlight');
	        } else {
	          label.addClass('active highlight');
	        }
	    } else if (e.type === 'blur') {
	    	if( $this.val() === '' ) {
	    		label.removeClass('active highlight'); 
				} else {
			    label.removeClass('highlight');   
				}   
	    } else if (e.type === 'focus') {
	      
	      if( $this.val() === '' ) {
	    		label.removeClass('highlight'); 
				} 
	      else if( $this.val() !== '' ) {
			    label.addClass('highlight');
				}
	    }

	});

	$('.tab a').on('click', function (e) {
	  
	  e.preventDefault();
	  
	  $(this).parent().addClass('active');
	  $(this).parent().siblings().removeClass('active');
	  
	  target = $(this).attr('href');

	  $('.tab-content > div').not(target).hide();
	  
	  $(target).fadeIn(600);
	  
	});
	

});

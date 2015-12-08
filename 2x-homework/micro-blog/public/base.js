
//This is the old form from Project 0, no OOP or such
console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  //when user clicks on submit button....
  $(submitButton).on("click",function(e){
  	//console.log("Working!");
  	e.preventDefault();
  		var $searchInput = $(searchinput).val();
		var $posts = '<div class="drag"  <li> # ' + $searchInput + ' </li>';
 //var $posts = $('<div class="drag" />').text('#anus');
 $(".subsection").append($posts).draggable();
 ".subsection2".droppable();
    
    return false;

});


// declares variable searchInput
var searchInput;


// constructor for main blog declares the objectc ~ couldn't get to work

function Blog(){
this.$searchInput = searchInput;
this.$button = $('submitButton');
}

blog = new Blog();


// creates an event with clicks via prototype method ~couldn't get to work


Blog.prototype.Clicks = function (){
	var button = this.button;
	 $(button).on("click",function(e){
  	e.preventDefault();
  	alert('clicked a button!');

});
	};

	



});




function postForm (){


}


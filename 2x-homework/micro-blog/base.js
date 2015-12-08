console.log("Sanity Check: JS is working!");

Parse.initialize("TlOemqdqa7jK4DZCj3RGrucO7HRJYAnJz0z5IBK6", "8WVN5smVVda5nHOcNqIUwT8kqgUOfAzmvgG7Dx50");

$(document).ready(function(){



  //when user clicks on submit button....
  $("#submitButton").on("click",function(e){
  	//prevents default action from taking place

  	e.preventDefault();
  		var $searchInput = $("#searchinput").val();
      // appends input result into column 1
		var $posts = '<div class="drag"  <li> # ' + $searchInput + ' </li>';
 //allows blog posts to be draggable
 $(".subsection").append($posts).draggable();
 $(".subsection2").droppable({
    drop: function(){
            console.log('drop heard');
          }
 });
    
    return false;

});


// declares variable searchInput
var searchInput = "";


// constructor for main blog declares the objectc ~ couldn't get to work

function Blog(){
this.$searchInput = searchInput;
this.$button = $('#submitButton');
this.testButton = function(){
  console.log ("Button clicked!");
};
}


Blog.prototype.Clicks = function (){
   (this.$button).on("click",function(e){
      e.preventDefault();
      alert('clicked a button!');
    });
};


var blog = new Blog();

//tests to see if constructor works, will print "Button clicked!" on console
blog.testButton();

// creates an event with clicks via prototype method ~couldn't get to work
blog.Clicks();	



});




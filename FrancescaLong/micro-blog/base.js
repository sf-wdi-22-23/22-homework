console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var counter = 1;

/* variables used in the code */
/*
var posts = {
  	postText: "",
  	counter: counter++,
  	postDateTime: ""
  };
*/

function Posts(postText, counter, postDateTime)  {
  	this.postText = "";
  	this.counter = 0;
  	this.postDateTime = new Date();
  }



$("#submitButton").on("click", function(){
	event.preventDefault();
	//console.log("button was clicked");
	var value = $("#inputBox").val();
	console.log(value);
	var newInput = new Posts(value, Posts.length + 1, new Date());
	//Posts.postText = new value;
	//Posts.counter = new Posts.counter++;
	//Posts.postDateTime = new Date();
	console.log(Posts);
});

/*
$("#inputBox").on("click", "button", function(){}

$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();
*/


/*
$("#submitButton").on("click", function(){
  		event.preventDefault();
  		Posts.postText = "#inputBox".val(),
  		Posts.counter = Posts.counter++,
  		Posts.postDateTime = new Date()
});
*/


/*
Posts.postText = "test1",
Posts.counter = counter++,
Posts.postDateTime = new Date()

console.log(Posts);
console.log(Posts[0]);
/*

/* internet solution 2 - also fails to put anyting into the object
var data = $('#form').serializeArray().reduce(function(posts, input) {
    posts[input.blog] = input.inputBox;
    return posts;
}, {});
*/

/* internet solution 1 - also fails to put anyting into the object
$("#submitButton").on("click", function(){
  		$("#form.input").each(function() {
  			data[input] = input;
  		 	data[counter] = counter++;
  		 	data[postDateTime] = new Date();
	});
});
*/

/* My original solution - doesn't push the data into the object
$("#submitButton").on("click", function(){
  		posts.input = new input("#inputBox"),
  		posts.counter = new counter(counter++),
  		posts.postDateTime = new Date()
});
*/



/*
 $("#square1").one("click", function(){
 	$("#square1").css("color", "green");
 	$("#square1").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[0] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});
*/	




});

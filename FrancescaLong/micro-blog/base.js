console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var counter = 0;

/* variables used in the code */
  var posts = {
  	input: "",
  	counter: counter++,
  	postDateTime: ""
  };

posts.input = "test1",
posts.counter = 1,
posts.postDateTime = new Date()


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
console.log(posts);
console.log(data);
alert(posts[0]);


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

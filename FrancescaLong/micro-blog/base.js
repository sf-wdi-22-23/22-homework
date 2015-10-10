console.log("Sanity Check: JS is working!");

$(document).ready(function(){

/* variables used in the code */
  var posts = {
  	input: "",
  	counter: 0,
  	postDateTime: ""
  };

$("#submitButton").on("click", function(){
	posts.push(
  		input = "#inputBox",
  		counter = counter++,
  		postDateTime = new Date()
  	  	);
});

console.log(posts());
console.log("test");


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

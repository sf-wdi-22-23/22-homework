// wait for the DOM to finish loading
$(document).ready(function(){
  // all code to manipulate the DOM
  // goes inside this function
	alert("Javascript link is good to go!");

var turnCounter = 0;
var markX = "X";
var markO = "O";
var marker = markX;
var nextPlayer = markO;
var plays = ["a","b","c","d","e","f","g","h","i"];
var winnerDeclared = 0;

function switchMarker () {
	for (var i = 0; i < 2; i++) {
		if (turnCounter % 2 === 0) {
			marker = markX;
			turnCounter++;
			nextPlayer = markO;
			return marker;
		}
		else marker = markO;
		turnCounter++;
		nextPlayer = markX;
		return marker;
		}
	}


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
	
	
 $("#square2").one("click", function(){
 	$("#square2").css("color", "green");
 	$("#square2").append(switchMarker());
 	console.log("Play number " + turnCounter); 
 	plays[1] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});
	
 $("#square3").one("click", function(){
 	$("#square3").css("color", "green");
 	$("#square3").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[2] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});
	
 $("#square4").one("click", function(){
 	$("#square4").css("color", "green");
 	$("#square4").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[3] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});
	
 $("#square5").one("click", function(){
 	$("#square5").css("color", "green");
 	$("#square5").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[4] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});
	
 $("#square6").one("click", function(){
 	$("#square6").css("color", "green");
 	$("#square6").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[5] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});

 $("#square7").one("click", function(){
 	$("#square7").css("color", "green");
 	$("#square7").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[6] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});
	
 $("#square8").one("click", function(){
 	$("#square8").css("color", "green");
 	$("#square8").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[7] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});
	
 $("#square9").one("click", function(){
 	$("#square9").css("color", "green");
 	$("#square9").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[8] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});

function checkWinner() {
	if ((turnCounter>=5 && turnCounter<=9) && 
		((plays[0]===plays[1] && plays[0]===plays[2]) || 
		 (plays[3]===plays[4] && plays[3]===plays[5]) || 
		 (plays[6]===plays[7] && plays[6]===plays[8]) || 
		 (plays[0]===plays[3] && plays[0]===plays[6]) || 
		 (plays[1]===plays[4] && plays[1]===plays[7]) || 
		 (plays[2]===plays[5] && plays[2]===plays[8]) || 
		 (plays[0]===plays[4] && plays[0]===plays[8]) || 
		 (plays[2]===plays[4] && plays[2]===plays[6])
		 )) {
			winnerDeclared = 1;
			alert(marker + " has won the game!");
			location.reload(true);
			return;
		}
		else if (turnCounter === 9) {
			winnerDeclared = 1;
			alert("No one wins. It's a tie!");
			location.reload(true);
			return;
		}
	}

//reset button
 $("#resetButton").on("click", function() {
    location.reload(true);
    var turnCounter = 0;
	});

});

/*	
 $("#resetButton").on("click", function () {
    var $btn = $(this).button('loading'); //starting code
    // business logic...
    $btn.button("reset"); //starting code
    var turnCounter = 0;
    location.reload(true);

var square = function(e) {
		this.element = e;
	};


	square.prototype.listen = function() {
		var that = this;
		this.element.on('click', function(){	
			that.takeTurn();
			$(this).off('click');
		});
	};
*/



	

/*
function reset(table) {
  table.find('td').each(function() {
    $(this).removeClass('circle').removeClass('cross');
  });
}
*/

  
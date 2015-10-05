// wait for the DOM to finish loading
$(document).ready(function(){


  	var $boxes = $('.box');
  	var box1 = $('#box1');
  	var box2 = $('#box2');
  	var box3 = $('#box3');
  	var box4 = $('#box4');
  	var box5 = $('#box5');
  	var box6 = $('#box6');
  	var box7 = $('#box7');
  	var box8 = $('#box8');
  	var box9 = $('#box9');

// var cellValue = ;

// function cellValue(key) {
//   switch(key) {
//     case 'a': return null;
//     case 'b': return null;
//     case 'c': return null;
//     case 'd': return null;
//     case 'e': return null;
//     case 'f': return null;
//     case 'g': return null;
//     case 'h': return null;
//     case 'i': return null;
//     default : return null;
//   }
// }


//Check for winner.  If getWinner returns X or O, getWinner() is TRUE and alert is triggered.
//  

var getWinner = function() {
  if (winnerIs('X')) {
    return 'X';
  }
  if (winnerIs('O')) {
    return 'O';
  }
  return null;
};


//Returns TRUE if one of winsRow, winsColumn, or winsDiagonal is true

var winnerIs = function (player) {
  return winsRow(player) || winsColumn(player) || winsDiagonal(player);
};


//Returns TRUE if all three positions are the same (either X or O)

var allThree = function (player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
};


//Checks if any of the rows have allThree.  Returns True if so.

var winsRow = function (player) {
  return allThree(player, box1, box2, box3) ||
         allThree(player, box4, box5, box6) ||
         allThree(player, box7, box8, box9);
};

//Checks if any of the columns have allThree. Returns True if so.

var winsColumn = function (player) {
  return allThree(player, box1, box4, box7) ||
         allThree(player, box2, box5, box8) ||
         allThree(player, box3, box6, box9);
};

//Checks if any of the diagonals have allThree. Returns True if so.

var winsDiagonal = function (player) {
  return allThree(player, box1, box5, box9) ||
         allThree(player, box3, box5, box7);
};


//Resetting the game when button is clicked

var gameReset = function (){
	$boxes.text("");
	turnTracker = 0;
};

$('#reset').on('click', function() {
    gameReset();
  });


//Track which player is playing at the time...  Call changeMove function when a move has taken place and add one to turn-tracker.

  	var move = "X";
  	var turnTracker = 0;

  	var changeMove = function(){
  		if(move === "X"){
  			move = "O";
  		}
  		else {
  			move = "X";
  		}
  	};


//When box is clicked, first check if anything inside box.  

	$('.box').click(function(){
  		
  		if ($(this).text() === ""){

// If not, add the move of the player. Add one to turn tracker and change the mover.
  			$(this).text(move);


  			turnTracker += 1;
  			changeMove();


//Check to see if winner.  If so, alert who has won.  If not, check if tie.
  			if(getWinner()){

  				alert("Player " + move + " has won!");
  			}

  			else if (turnTracker<9){
  				
  			}

  			else {alert("The match is a tie!");
  			}

  		}

//If box is already full, alert player.  			
  		else { alert("Click on an empty box!");
  		}





  		// console.log('.box'.html());

  		// if(('.box').html()){
  		// 	console.log('True');}
  		// 	else {console.log('False');
  		// }

  	});

});


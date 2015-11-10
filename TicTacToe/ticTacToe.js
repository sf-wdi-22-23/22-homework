// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

alert("Let's Play TicTacToe!");

  // select all the boxes
  // we speed up the site a little by using the $() selector once 
  // and saving the result in a variable instead of selecting over and over
  var $boxes = $('.box');
  
  // variable that delares player 1 is X and player 2 is O
  var turn = "X";

  // counts how many moves, start with 0 and the limit is 9 turns
  var moves = 0;


  //Declares how many times player 1 or player 2 has won
  var XWins = 0;
  var YWins = 0;

  // purpose was to make an empty array and make a mark x or o on each blank entry, did not use on this code
  var empty = "";
  var board = [empty,empty,empty,empty,empty,empty,empty,empty,empty];

  // helper function to reset the game
  var resetGame = function() {
    // reset the board itself
    $boxes.text("");
    $boxes.removeClass("X");
    $boxes.removeClass("O");

     // resets variables once button is clicked
    turn = "X";   
    moves = 0;
  };

  //determines whose turn it is, X or O

  var changeTurn = function() {
    if (moves%2 === 0) {
      turn = "X";
    } else {
      turn = "O";
    }
  };


  /**** HELPER FUNCTIONS TO CHECK FOR WINNER ****/

  // returns "X" if player X owns all three boxes passed in, 
  //   "O" if player O owns all three boxes passed in, or 
  //   null otherwise
  var allThree = function($firstBox, $secondBox, $thirdBox) {
   var firstBoxOwner = $firstBox.text(),
        secondBoxOwner = $secondBox.text(),
        thirdBoxOwner = $thirdBox.text();

    if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)){
      if (firstBoxOwner === "X"){
        return "X";
      } else if (firstBoxOwner === "O"){
        return "O";
      }
    }
    // we will only get to this point if we haven't returned
    // a player mark yet
    return null;
  };

  // check for wins across both diagonals
  // returns a player mark if one player owns all three boxes in one of the diagonals
  // returns null otherwise
  var WinnerDiagonal = function() {
    // the eq method is how we "index into" a jQuery collection!
    var leftDownDiag = allThree($boxes.eq(0), $boxes.eq(4), $boxes.eq(8));
    var rightUpDiag = allThree($boxes.eq(2), $boxes.eq(4), $boxes.eq(6));

    // Using a special property of JS's OR (||) to return the winning mark
    // remember, as soon as JS finds a truthy side of an OR, 
    // it returns the *value* of that side.  So null || "O" will give us "O".
    return leftDownDiag || rightUpDiag;
  };

  // check for wins on columns
  // returns a player mark if one player owns all three boxes in one of the columns
  // returns null otherwise
  var WinnerVertical = function() {
    var leftCol = allThree($boxes.eq(0), $boxes.eq(3), $boxes.eq(6));
    var middleCol = allThree($boxes.eq(1), $boxes.eq(4), $boxes.eq(7));
    var rightCol = allThree($boxes.eq(2), $boxes.eq(5), $boxes.eq(8));

    // using the || trick again
    return leftCol || (middleCol || rightCol);
  };

  // check for wins on rows
  // returns a player mark if one player owns all three boxes in one of the row
  // returns null otherwise
  var WinnerRow = function() {
    var topRow = allThree($boxes.eq(0), $boxes.eq(1), $boxes.eq(2));
    var middleRow = allThree($boxes.eq(3), $boxes.eq(4), $boxes.eq(5));
    var bottomRow = allThree($boxes.eq(6), $boxes.eq(7), $boxes.eq(8));

    return topRow || (middleRow || bottomRow);
  };

  // helper function to check for winner
  var getWinner = function() {
    return WinnerDiagonal() || (WinnerRow() || WinnerVertical());
  };



  // Click Functions

  // listen for clicks on reset button to reset the game
  $('#reset').on('click', function() {
    resetGame();
  });

  // clicks on function and starts the game
  $boxes.on('click', function() {
    // check if this box is already claimed
    if ($(this).text() === "") {

      // box is empty! continue with the turn
      // mark this box
      $(this).text(turn);
      $(this).addClass(turn);
      // increase move counter
      moves ++;
      
      // check for a winner 
      var winner = getWinner();
      if (winner) {
        // there is a winner! 
        // alert the win and reset the game
        alert("Player " + winner + " won!");
        resetGame();

        //displays amount of times player 1 or 2 have won (did not work)
        var WinnerFind = function() {
        if (winner === 'X'){
        	XWins++;
        	return XWins;
        }
        	else if (winner === 'O') {
        		YWins++;
        		return YWins;
        	}
        };


      } else if (moves < 9) {
        // there is no winner, yet, 
        // but since fewer than 9 moves have been made, 
        // there are empty spaces left.  on to the next turn!
        changeTurn();
      } else {
        // there is no winner, and there are no empty spaces
        // alert the result and reset the game
        alert("Game Tied");
        resetGame();
      }
    }
  });


});

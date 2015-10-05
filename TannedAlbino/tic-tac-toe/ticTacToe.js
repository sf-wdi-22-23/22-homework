// wait for the DOM to finish loading
$(document).ready(function() {
  	alert("Would you like to play a game?");// all code to manipulate the DOM
  // goes inside this function


	var $board = $('#board');
	var	$boxes = $('.box');
	var	$reset = $('#reset');
	var turn = "X";
	var moves = 0;
	
	var resetGame = function() {
		$boxes.text("");
		$boxes.removeClass("X");
		$boxes.removeClass("O");
		turn = "X";
		moves = 0;
	};
	var changeTurn = function() {
		if (turn === "X") {
			turn = "O";
		} else {
			turn = "X";
		}
	};
	var allThree = function(player, box1, box2, box3) {
		return ($(box1).text() === player) && ($(box2).text() === player) && ($(box3).text() === player);
	};
	var winsDiagonal = function(player) {
		return allThree(player, $boxes.get(0), $boxes.get(4), $boxes.get(8)) ||
				allThree(player, $boxes.get(2), $boxes.get(4), $boxes.get(6));

	};
	var winsColumn = function(player) {
		return allThree(player, $boxes.get(0), $boxes.get(3), $boxes.get(6)) ||
				allThree(player, $boxes.get(1), $boxes.get(4), $boxes.get(7)) ||
				allThree(player, $boxes.get(2), $boxes.get(5), $boxes.get(8));

	};
	var winsRow = function(player) {
		return allThree(player, $boxes.get(0), $boxes.get(1), $boxes.get(2)) ||
				allThree(player, $boxes.get(3), $boxes.get(4), $boxes.get(5)) ||
				allThree(player, $boxes.get(6), $boxes.get(7), $boxes.get(8));
	};
	var winnerIs = function(player) {
		if (winnerIs ("X")) {
			return "X";
		}
		else if (winnerIs("O")) {
			return "O";
		}
		else {
			return null;
		}
	};
	$boxes.on('click', function() {
		if($(this).text() === "") {
			$(this).text(turn);
			$(this).addClass(turn);
			moves += 1;
			var winner = getWinner();
			if (winner) {
				alert("Player " + winner + " wins!");
				resetGame();
			} else if (moves <9) {
			changeTurn();
		} else {
			alert ("Tie!");
			resetGame();
			}
		}
	});
	$reset.on('click', function() {
		resetGame();
	});
});

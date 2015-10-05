/*
------JQuery to interact with the page-----
*/
$(document).ready(function() {

	var xcount = 0;
	var ocount = 0;
	var moves = 0;
	var turn = "X";

	var $tile = $('.gamePiece');
	var $reset = $('#reset');

//change the character	
	var changeTurn = function() {
		if (turn === "X") {
			turn = "O";
			$('#playTurn').empty().removeClass('X').removeClass('O');
			$('#playTurn').addClass('O').append("<p>O's Turn</p>");
		} else {
			turn = "X";
			$('#playTurn').empty().removeClass('X').removeClass('O');
			$('#playTurn').addClass('X').append("<p>X's Turn</p>");
		}
	};

//resets the game
	var reset = function() {
		$tile.empty();
		$tile.append('<p></p>');
		$tile.removeClass('X');
		$tile.removeClass('O');
		turn = "X";
		moves = 0;
		$('#playTurn').empty().removeClass('X').removeClass('O');
		$('#playTurn').addClass('X').append("<p>X's Turn</p>");
		$('#reset').hide();
		$('#taunt').hide();
	};

	var checkThree = function($box1, $box2, $box3) {
		var box1 = $box1.text();
		var box2 = $box2.text();
		var box3 = $box3.text();
		if ((box1 === box2) && (box2 === box3)) {
			if (box1 === "X") {
				return "X";
			} else if (box1 === "O") {
				return "O";
			}
		}
	};
	var checkRow = function() {
		var tRow = checkThree($tile.eq(0), $tile.eq(1), $tile.eq(2));
		var mRow = checkThree($tile.eq(3), $tile.eq(4), $tile.eq(5));
		var bRow = checkThree($tile.eq(6), $tile.eq(7), $tile.eq(8));
		return tRow || mRow || bRow;
	};
	var checkCol = function() {
		var lCol = checkThree($tile.eq(0), $tile.eq(3), $tile.eq(6));
		var mCol = checkThree($tile.eq(1), $tile.eq(4), $tile.eq(7));
		var rCol = checkThree($tile.eq(2), $tile.eq(5), $tile.eq(8));
		return lCol || mCol || rCol;
	};
	var checkDiag = function() {
		var diag1 = checkThree($tile.eq(0), $tile.eq(4), $tile.eq(8));
		var diag2 = checkThree($tile.eq(2), $tile.eq(4), $tile.eq(6));		
		return diag1 || diag2;
	};
	var checkWin = function() {
		var r = checkRow();
		var c = checkCol();
		var d = checkDiag();
		return r || c|| d;
	};


	var checkPlayCheck = function() {
		if ($(this).text() === "") {	

			if (turn === "X") {
				$(this).text(turn);
				$(this).addClass(turn);
				changeTurn();
				moves+=1;
			} else if (turn === "O") {
				$(this).text(turn);
				$(this).addClass(turn);				
				changeTurn();
				moves+=1;
			}


			var winner = checkWin();
			if (winner) {
				alert("Player " + winner + " won!");
				$('#reset').show();
				$('#taunt').show();
			} else if (moves === 9) {
				alert("No one won!");
				$('#reset').show();
				$('#taunt').show();
			}
		}
	};
/*
------JQuery events-------
*/

	$('#reset').hide();
	$('#taunt').hide();
	$('#playTurn').addClass('X').append("<p>X's Turn</p>");

	$('.gamePiece').on('click', checkPlayCheck);
	
	$reset.on('click', reset);
	
});





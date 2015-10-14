// wait for the DOM to finish loading
$(document).ready(function(){
  	var turnCount = 0;

	$(".col-md-4").on("click",function(){
		if(turnCount%2===0 && $(this).text().length===0){
			$("#playersTurn").text("Player 'O's Turn");
			$(this).text("X");
			turnCount++;
			checkVictory("X");
					
		}
		else if($(this).text().length===0){
			$("#playersTurn").text("Player 'X's Turn");
			$(this).text("O");
			turnCount++;
			checkVictory("O");

		}
		
	});

	function checkVictory(player){
		if($(".1").text() === $(".2").text() && $(".1").text() === $(".3").text() && $(".1").text().length != 0){
			alert("Player " + player + " wins!");
			$(".col-md-4").text("");
			turnCount=0;
		}
		else if($(".4").text() === $(".5").text() && $(".4").text() === $(".6").text() && $(".4").text().length != 0){
			alert("Player " + player + " wins!");
			$(".col-md-4").text("");
			turnCount=0;
		}
		else if($(".7").text() === $(".8").text() && $(".7").text() === $(".9").text() && $(".7").text().length != 0){
			alert("Player " + player + " wins!");
			$(".col-md-4").text("");
			turnCount=0;
		}

		else if($(".1").text() === $(".4").text() && $(".1").text() === $(".7").text() && $(".1").text().length != 0){
			alert("Player " + player + " wins!");
			$(".col-md-4").text("");
			turnCount=0;
		}
		else if($(".2").text() === $(".5").text() && $(".2").text() === $(".8").text() && $(".2").text().length != 0){
			alert("Player " + player + " wins!");
			$(".col-md-4").text("");
			turnCount=0;
		}
		else if($(".3").text() === $(".6").text() && $(".3").text() === $(".9").text() && $(".3").text().length != 0){
			alert("Player " + player + " wins!");
			$(".col-md-4").text("");
			turnCount=0;
		}

		else if($(".1").text() === $(".5").text() && $(".1").text() === $(".9").text() && $(".1").text().length != 0){
			alert("Player " + player + " wins!");
			$(".col-md-4").text("");
			turnCount=0;
		}
		else if($(".3").text() === $(".5").text() && $(".3").text() === $(".7").text() && $(".3").text().length != 0){
			alert("Player " + player + " wins!");
			$(".col-md-4").text("");
			turnCount=0;
		}
		else if (turnCount===9) { 
			alert("It's a Tie!"); 
			$(".col-md-4").text("");
			turnCount=0;
		}


	}

	$("button").click(function () {
    	$(".col-md-4").text("");
	});


});

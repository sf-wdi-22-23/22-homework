$(document).ready(function() {

	var p1 = 'X';
	var p2 = 'O';
	var activePlayer = p1;
	var winningSolution = [ [],[],[],[],[],[],[],[] ];
	var wins = {'X': 0,
				'O': 0};
	var changePlayer = function(){
  		if(activePlayer === p1){
  			activePlayer = p2;
  		}
  		else{
  			activePlayer = p1;
  		}
  	};
	
	$('.box').on('click', function(){

	for (var i = 0; i < 8 ; i++){
		if($(this).hasClass(i)) {
			winningSolution[i].push(activePlayer);
			if(winningSolution[i][0] === winningSolution[i][1] && winningSolution[i][2]) {
				$('.winner').text("Winner this round: " + activePlayer);
				wins[activePlayer]++;
			}
		}
	}

  	if($(this).text() === "") {
  		if(activePlayer===p1){
  			$(this).text(p1);
  			$(this).addClass(p1);
  		}
  		else{
  			 $(this).text(p2);
  			 $(this).addClass(p2);
  		}
  		changePlayer();
  	}
  	score();

	});

	//reset
	$('button').on('click', function() {
		$('.box').text("");
		$('.winner').text("");
		activePlayer = p1;
		winningSolution = [ [],[],[],[],[],[],[],[] ];
	});


	var score = function(){
  	$(".score").text("Total Score: X: " + wins['X'] +", O: " + wins['O']);
  };

});

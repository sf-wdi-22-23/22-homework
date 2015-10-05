// wait for the DOM to finish loading


$(document).ready(function(){
	var p1 = "X";
	var p2 = "O";
	var activePlayer = p1;
	//solSet is an array that keeps track of if the three solutions have 3 x's or 3 o's. 
	var solSet = [[],[],[],[],[],[],[],[]];
	var wins = {"X":0,
				"O":0,
	}
	var foundWinner = false;
  // all code to manipulate the DOM
  // goes inside this function
  $(".box").on("click", function(){
  if($(this).text() !== "X" && $(this).text() !== "O"){
  		if(activePlayer===p1){
  			$(this).text("X");
  			classDef = $(this);
  		}
  		else{
  			 $(this).text("O");
  		}
  		/*
		So each box has been labled with a class (should be an id, but I cna't figure it oiut)
		from 0 to 8 corresponding to their box on the screen. There are 8 possible solutions, 0-7, 0-2 being the three rows
		3-5 being the three columns, 7 8 being the two diagonals. I just gave each one the classes of the solutions they are a part of. 
		There probably is a better way to store this with arrays and stuff, but I'm just hardcoding it since I can't figure out the logic and want it to be done.

  		*/

  		for(var i = 0; i < 8 ; i++){
  			if($(this).hasClass(i)){
  				solSet[i].push(activePlayer);
  				console.log(solSet[i][0]);
  				if(solSet[i][0]== solSet[i][1] && solSet[i][1]== solSet[i][2] && !foundWinner){
  					console.log("HELLLO");
  					$("#curWinner").text("Last Winner was: " + activePlayer);
  					wins[activePlayer]+=1;
  					foundWinner = true;
  				}

  			}
  		}
  		console.log(solSet);
  		updateWins();
  		switchActivePlayer();
  		
  	}

  });

  $("#clear").on("click", function(){
  	softReset();
  });

  $("#restart").on("click", function(){
  	fullReset();
  });
  var switchActivePlayer = function(){
  		if(activePlayer === p1){
  			activePlayer = p2;
  		}else{
  			activePlayer = p1;
  		}
  }

  var updateWins = function(){
  	$("#curScore").text("Current Score: X: " + wins["X"] +", O: " + wins["O"]);
  }

  var softReset = function(){
	$(".box").text("");
  	solSet=[[],[],[],[],[],[],[],[]];
  	foundWinner = false;
  	activePlayer = "X";
  }
  var fullReset = function(){
  	softReset();
  	wins = {"X":0,
			"O":0,
	}
	updateWins();
  }
});

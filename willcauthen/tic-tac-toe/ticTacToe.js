var hashBoard =[null, null, null,null, null, null,null, null, null];

//get's shit ready
$(document).ready(function(){
	var id='';
	//function determines whose turn it is
	var whoseTurn = "O";
	
	//and assigns that player to the TTT board and alternates between players
	$('.box').click(function(event) {
		id = event.target.id;
		console.log(id);
		$('#'+id).data('clicked', true);
		if (whoseTurn === "O") {
			hashBoard = draw(id,whoseTurn);
			whoseTurn = "X"; 
			console.log('now its X tunr');
		} else if(whoseTurn === "X"){
			hashBoard= draw(id,whoseTurn);
			whoseTurn = "O";
			console.log('now its O tunr');
		}
		var winner=getWinner(hashBoard);
		if(winner !== null){
			alert("Congrats " + winner +", You've won!");
			for (i=0; i < 9; i++){
			hashBoard[i] = null;
		}	$('.box').empty();

		} else {
			alert("Draw! There are no winners here.");
			for (i=0; i < 9; i++){
			hashBoard[i] = null;
		}	$('.box').empty();

		} 
	});	
		//should associate a1 with array[0][0], a2 with array[0][1], and so forth
		function draw(id, whoseTurn) {
			 var ids ='#' + id;
			switch (ids){
				case  "#a1": {
					if(whoseTurn === "O") {
					console.log('i am here at the O turn ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[0]= 'O';
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					console.log('i am here at the x turn');
					hashBoard[0]= 'X';
				}


				}break;
				case  "#a2": {
					if(whoseTurn === "O") {
					console.log('i am here at the O tunr ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[1]= 'O';
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					console.log('i am here at the x turn');
					hashBoard[1]= 'X';
				}
				}break;
				case  "#a3": {
					if(whoseTurn === "O") {
					console.log('i am here at the O tunr ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[2]= whoseTurn;
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					console.log('i am here at the x turn');
					hashBoard[2]= whoseTurn;
				}
				}break;
				case  "#b1": {
					if(whoseTurn === "O") {
					console.log('i am here at the O tunr ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[3]= whoseTurn;
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					console.log('i am here at the x turn');
					hashBoard[3]= whoseTurn;
				}
				}break;
				case  "#b2": {
					if(whoseTurn === "O") {
					console.log('i am here at the O tunr ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[4]= whoseTurn;
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					console.log('i am here at the x turn');
					hashBoard[4]= whoseTurn;
				}
				}break;
				case  "#b3": {
					if(whoseTurn === "O") {
					console.log('i am here at the O tunr ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[5]= whoseTurn;
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					console.log('i am here at the x turn');
					hashBoard[5]= whoseTurn;
				}
				}break;
				case  "#c1": {
					if(whoseTurn === "O") {
					console.log('i am here at the O tunr ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[6]= whoseTurn;
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');					console.log('i am here at the x turn');
					hashBoard[6]= whoseTurn;
				}
				}break;
				case  "#c2": {
					if(whoseTurn === "O") {
					console.log('i am here at the O tunr ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[7]= whoseTurn;
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					console.log('i am here at the x turn');
					hashBoard[7]= whoseTurn;
				}
				}break;
				case  "#c3": {
					if(whoseTurn === "O") {
					console.log('i am here at the O tunr ');
					$(ids).html('<img src="TicTactToe.O.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					hashBoard[8]= whoseTurn;
				} else if (whoseTurn === "X")  {
					$(ids).html('<img src="TicTacToe.X.png"  style="height:125px;width:125px;background:black; margin-bottom:55px; margin-left:15px">');
					console.log('i am here at the x turn');
					hashBoard[8]= whoseTurn;
				}
				}break;
				default:
				break;
				
		
		}
		return hashBoard;
	}
	function getWinner(hashBoard) {
		if (((hashBoard[0]===hashBoard[1]) && (hashBoard[1] === hashBoard[2]) && (hashBoard[0] === "X")) || 
			((hashBoard[3]===hashBoard[4]) && (hashBoard[4] === hashBoard[5]) && (hashBoard[3] === "X")) ||
			((hashBoard[6]===hashBoard[7]) && (hashBoard[8] === hashBoard[6]) && (hashBoard[6] === "X")) ||
			((hashBoard[0]===hashBoard[3]) && (hashBoard[6] === hashBoard[0]) && (hashBoard[0] === "X")) ||
			((hashBoard[1]===hashBoard[4]) && (hashBoard[7] === hashBoard[1]) && (hashBoard[1] === "X")) ||
			((hashBoard[2]===hashBoard[5]) && (hashBoard[8] === hashBoard[2]) && (hashBoard[2] === "X")) ||
			((hashBoard[0]===hashBoard[4]) && (hashBoard[8] === hashBoard[0]) && (hashBoard[0] === "X")) ||
			((hashBoard[2]===hashBoard[4]) && (hashBoard[2] === hashBoard[6]) && (hashBoard[2] === "X"))) {
				console.log("X wins!!");
				//alert("X won!");
				return "X";
			}
			else if(((hashBoard[0] === hashBoard[1]) && (hashBoard[1] === hashBoard[2]) && (hashBoard[0] === "O")) || 
					((hashBoard[3] === hashBoard[4]) && (hashBoard[4] === hashBoard[5]) && (hashBoard[3] === "O")) ||
					((hashBoard[6] === hashBoard[7]) && (hashBoard[8] === hashBoard[6]) && (hashBoard[6] === "O")) ||
					((hashBoard[0] === hashBoard[3]) && (hashBoard[6] === hashBoard[0]) && (hashBoard[0] === "O")) ||
					((hashBoard[1] === hashBoard[4]) && (hashBoard[7] === hashBoard[1]) && (hashBoard[1] === "O")) ||
					((hashBoard[2] === hashBoard[5]) && (hashBoard[8] === hashBoard[2]) && (hashBoard[2] === "O")) ||
					((hashBoard[0] === hashBoard[4]) && (hashBoard[8] === hashBoard[0]) && (hashBoard[0] === "O")) ||
					((hashBoard[2] === hashBoard[4]) && (hashBoard[2] === hashBoard[6]) && (hashBoard[2] === "O"))) {
				console.log("O wins!!");
				//alert("O won!");
				return "O";
			} else if  ((hashBoard[0] !== null) && (hashBoard[1] !== null) && (hashBoard[2] !== null) && 
						(hashBoard[3] !== null) && (hashBoard[4] !== null) && (hashBoard[5] !== null) &&
						(hashBoard[6] !== null) && (hashBoard[7] !== null) && (hashBoard[8] !== null)) {
				return null;
			} 

			else return nobody;
	}
	
	});


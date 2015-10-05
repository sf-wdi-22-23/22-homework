// wait for the DOM to finish loading
$(document).ready(function(){
  // all code to manipulate the DOM
  // goes inside this function
  var turn = 0;

// reset button
  $("#reset").on("click", function() {
  	$("#winOrLose").text("");
  	$("#boxOne").text("1");
  	$("#boxTwo").text("2");
  	$("#boxThree").text("3");
  	$("#boxFour").text("4");
  	$("#boxFive").text("5");
  	$("#boxSix").text("6");
  	$("#boxSeven").text("7");
  	$("#boxEight").text("8");
  	$("#boxNine").text("9");
  	turn = 0;
  });

 // test for winner
 function testWinner() {
 	  	if (($("#boxOne").text() == $("#boxTwo").text()) && ($("#boxTwo").text() == $("#boxThree").text())){
  			$("#winOrLose").text("We have a winner!");
  		} else if (($("#boxFour").text() == $("#boxFive").text()) && ($("#boxFive").text() == $("#boxSix").text())){
  			$("#winOrLose").text("We have a winner!");
  		} else if (($("#boxSeven").text() == $("#boxEight").text()) && ($("#boxEight").text() == $("#boxNine").text())){
  			$("#winOrLose").text("We have a winner!");
  		} else if (($("#boxOne").text() == $("#boxFour").text()) && ($("#boxFour").text() == $("#boxSeven").text())){
  			$("#winOrLose").text("We have a winner!");
  		} else if (($("#boxTwo").text() == $("#boxFive").text()) && ($("#boxFive").text() == $("#boxEight").text())){
  			$("#winOrLose").text("We have a winner!");
  		} else if (($("#boxThree").text() == $("#boxSix").text()) && ($("#boxSix").text() == $("#boxNine").text())){
  			$("#winOrLose").text("We have a winner!");
  		} else if (($("#boxOne").text() == $("#boxFive").text()) && ($("#boxFive").text() == $("#boxNine").text())){
  			$("#winOrLose").text("We have a winner!");
  		} else if (($("#boxThree").text() == $("#boxFive").text()) && ($("#boxFive").text() == $("#boxSeven").text())){
  			$("#winOrLose").text("We have a winner!");
  		} else if (turn === 8) {
  			$("#winOrLose").text("We've got a tie!");
  		};
 };
  	
  $("#boxOne").on("click", function() {
	if ($("#boxOne").text() != "X" && $("#boxOne").text() != "O") {
	  	if (!(turn%2)) {
	  		$("#boxOne").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxOne").text("O");
	  		testWinner();
	  		turn++;
	  	};
  	};
  }); 
  $("#boxTwo").on("click", function() {
	if ($("#boxTwo").text() != "X" && $("#boxTwo").text() != "O") {
	  	if (!(turn%2)) {
	  		$("#boxTwo").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxTwo").text("O");
	  		testWinner();
	  		turn++;
	  	};
  	};
  });
  $("#boxThree").on("click", function() {
	if ($("#boxThree").text() != "X" && $("#boxThree").text() != "O") {  	
	  	if (!(turn%2)) {
	  		$("#boxThree").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxThree").text("O");
	  		testWinner();
	  		turn++;
	  	};
  	};
  });
  $("#boxFour").on("click", function() {
  	if ($("#boxFour").text() != "X" && $("#boxFour").text() != "O") {
	  	if (!(turn%2)) {
	  		$("#boxFour").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxFour").text("O");
	  		testWinner();
	  		turn++;
	  	};
	};
  });
  $("#boxFive").on("click", function() {
	if ($("#boxFive").text() != "X" && $("#boxFive").text() != "O") {
	  	if (!(turn%2)) {
	  		$("#boxFive").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxFive").text("O");
	  		testWinner();
	  		turn++;
	  	};	
	};
  });
  $("#boxSix").on("click", function() {
	if ($("#boxSix").text() != "X" && $("#boxSix").text() != "O") {  	
	  	if (!(turn%2)) {
	  		$("#boxSix").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxSix").text("O");
	  		testWinner();
	  		turn++;
	  	};
	};
  });
  $("#boxSeven").on("click", function() {
	if ($("#boxSeven").text() != "X" && $("#boxSeven").text() != "O") {  
	  	if (!(turn%2)) {
	  		$("#boxSeven").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxSeven").text("O");
	  		testWinner();
	  		turn++;
	  	}; 
	};	
  });
  $("#boxEight").on("click", function() {
	if ($("#boxEight").text() != "X" && $("#boxEight").text() != "O") {  
	  	if (!(turn%2)) {
	  		$("#boxEight").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxEight").text("O");
	  		testWinner();
	  		turn++;
	  	};
	};
  });
  $("#boxNine").on("click", function() {
	if ($("#boxNine").text() != "X" && $("#boxNine").text() != "O") {  
	  	if (!(turn%2)) {
	  		$("#boxNine").text("X");
	  		testWinner();
	  		turn++;
	  	} else {
	  		$("#boxNine").text("O");
	  		testWinner();
	  		turn++;
	  	};
	};
  });
});

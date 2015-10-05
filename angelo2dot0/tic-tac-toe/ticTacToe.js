// wait for the DOM to finish loading
$(document).ready(function(){
  // all code to manipulate the DOM
  // goes inside this function
alert("Your jquery works!");

$('.box').on("click", function handleClick(event){
alert("Your click triggered this listener!");
$(this).css("background-color", "yellow");
});

var playerMove = "X";

var changePlayerMove = function () {
	if (playerMove === "X") {
		playerMove === "O";
	} else {
	  playerMove === "X";
}
};

});
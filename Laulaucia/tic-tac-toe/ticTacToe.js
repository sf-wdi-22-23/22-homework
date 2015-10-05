
// wait for the DOM to finish loading
$(document).ready(function(){
// all code to manipulate the DOM
  // goes inside this function
var turn = 0;
var xturns =[];
var oturns =[];
alert("x goes first!");
$(".box").on("click", function(){
	if( $(this).is(!':empty') ) {
		alert("You've already moved there");}
	else if ($(this).is(':empty')){
		$(this).css('background-color','lightgrey');
		if (turn%2===0){
			$(this).append('X');
			turn++;
			alert("Great move! Now its O's turn!");
			$(this).each(function(){
				xturns.push($(this).attr('id'));
				console.log(xturns);
			});

		}
		else if (turn%2!==0){
			$(this).append('O');
			turn++;
			alert("Great move! Now its X's turn!");
			$(this).each(function(){
				oturns.push($(this).attr('id'));
				console.log(oturns);
			});
		}
	}});

$('#reset').on("click", function(){
	$('.box').css('background-color', 'white');
	$('.box').empty();
	$('xturns').empty();
	$('oturns').empty();

	});


});
alert("Are you ready to play tic tac toe???!");



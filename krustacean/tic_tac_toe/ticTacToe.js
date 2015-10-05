// wait for the DOM to finish loading

var isPlayerOne = true;
//$(document).ready(function(){});
var board=[];
var Xs = [];
var Os = [];
var winners = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  
]

/********************************
Board Code
*********************************/
$('.col-md-4.box').on('click',function(){
  if (board.indexOf($(this).attr('id')) === -1 ) {
     if (isPlayerOne) {
      $(this).html("<img src='x.png' id=x>");
      board.push($(this).attr('id'));
      Xs.push($(this).attr('id'));
      isPlayerOne = false;
      $('#playertwo').css('background-color', 'green');
      $('#playerone').css('background-color', 'lightblue');

    } else {
      $(this).html("<img src='o.png' id=o>");
      board.push($(this).attr('id'));
      Os.push($(this).attr('id'));
      isPlayerOne = true;
      $('#playerone').css('background-color', 'green');
      $('#playertwo').css('background-color', 'lightblue');
    }
  }
//If all moves done.
  if (board.length > 8) {
  alert('No winner play again?');
  Xs = [];
  Os = [];
  board = [];
  $('img').remove();
  }
});
/********************************
Reset Button
*********************************/
$('button').on('click', function(){
  $('img').remove();
  Xs = [];
  Os = [];
  board = [];
  isPlayerOne = true;
  $('#playerone').css('background-color', 'green');
  $('#playertwo').css('background-color', 'lightblue');
});


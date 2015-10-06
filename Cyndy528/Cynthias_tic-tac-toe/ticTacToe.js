

// wait for the DOM to finish loading

$(document).ready(function(){
  // all code to manipulate the DOM
  // goes inside this function
    
    $("#button1").click(function(){
    
    });
    
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        var square = squares[i];
        square.addEventListener("click", clickSquare);
    }
nextMover = "X";

function clickSquare(){
    this.innerText = nextMover;
    if (nextMover == "X") {
        nextMover = "O";
    } else {
        nextMover = "X";
    }
}
    

});
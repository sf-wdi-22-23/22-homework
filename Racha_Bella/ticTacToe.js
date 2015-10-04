// wait for the DOM to finish loading
var tBoard=[[null,null,null],[null,null,null],[null,null,null]];
var Xwins=0;
var Owins=0;
$(document).ready(function(){
	var i=0;
	var win=2;
	var id='';
	var turn ="X";
	
   		console.log('i am here');
		$(".box").click(function(event) {
	         id= event.target.id;
	         console.log('the id' + id);
	         $(this).data('clicked', true);
	         console.log('clicked');
	         if (turn =='X'){
	         	console.log('turn X');
	         	tBoard = draw(id,'X');
	         	turn ='O';
	         }else if (turn =="O"){
	         	console.log('turn O');
	         	tBoard= draw(id,'O');
	         	turn ='X';
	         }
	         i++;
	         	console.log('the i of the if is '+ i);
				win=winOrContinue(tBoard);
				if (win == 0){
					Owins++;
					$( ".box" ).empty();
				    for (var j=0;j<3;j++){
				    	for(var k=0;k<3;k++){
				    		tBoard[j][k]=null;
				    	}
				    }
				    swal("Winner !", "O wins and the result is  O : "+ Owins + " and X : " + Xwins , "success")

				}
				else if (win == 1){
					Xwins++;

					$( ".box" ).empty();
				    for (var j=0;j<3;j++){
				    	for(var k=0;k<3;k++){
				    		tBoard[j][k]=null;
				    	}
				    }
				     swal("Winner !", "X wins and the result is  O : "+ Owins + " and X : " + Xwins , "success")

				}
				//$('span').html('<b>    X  : '+ Xwins + '<b>            O  : '+ Owins);
				if (i===9){
					i=0;
				}
			console.log('the i is '+ i);
	     });
		
	

	

//************************************TRYING SOME FUNCTIONS *****************************************************//
/*var casse='0'
	$('#case'+casse).on('click', function(){

		$(this).html('<img src="X.png"> ');

	}
	);


	$("div").click( function(event) {
        console.log(event.target.id +' ' + typeof(event.target.id));
    });*/

  // all code to manipulate the DOM
  // goes inside this function

  $("#reset").on("click", function(){
  	var i,j;
    $( ".box" ).empty();
    for (i=0;i<3;i++){
    	for(j=0;j<3;j++){
    		tBoard[i][j]=null;
    	}
    }

  	
  		
  	  	});

  //***********************************************FUNCTIONS*******************************************************//
  function getColumnClicked(){
  	var i;
  	$(".box").click(function(event) {
        i= event.target.id;
         $(this).data('clicked', true);
         console.log('the id from the function is'+ i)
        
    });
    return i;
   
    


  }

  function getClick(){

  }

  

  //getplayer will get the player if X or O, there is two ways to do it, using the Html or the tboard array  , this one uses Html

  function getPlayer(id) {
  	switch (id) {
  		case 'case0':
  		{
  			if ($('#case0').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case0').html()=== '<img src="round.png"> '){
  				return 'O';
  			}
  		}
  		break;
  		case 'case1':
  		{
  			if ($('#case1').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case1').html()=== '<img src="round.png"> '){
  				return 'O';
  			}

  		}
  		break;
  		case 'case2':
  		{
  			if ($('#case2').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case2').html()=== '<img src="round.png"> '){
  				return 'O';
  			}

  		}
  		break;
  		case 'case3':
  		{
  			if ($('#case3').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case3').html()=== '<img src="round.png"> '){
  				return 'O';
  			}
  		}
  		break;
  		case 'case4':
  		{
  			if ($('#case4').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case4').html()=== '<img src="round.png"> '){
  				return 'O';
  			}

  		}
  		break;
  		case 'case5':
  		{
  			if ($('#case6').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case7').html()=== '<img src="round.png"> '){
  				return 'O';
  			}

  		}
  		break;
  		case 'case6':
  		{
  			if ($('#case6').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case6').html()=== '<img src="round.png"> '){
  				return 'O';
  			}

  		}
  		break;
  		case 'case7':
  		{
  			if ($('#case7').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case7').html()=== '<img src="round.png"> '){
  				return 'O';
  			}

  		}
  		break;
  		case 'case8':
  		{
  			if ($('#case8').html() ==='<img src="X.png"> ') {
  				return 'X';

  			} else if ($('#case8').html()=== '<img src="round.png"> '){
  				return 'O';
  			}

  		}
  		break;
  		default:
  		break;

  	}
  }// end of the function

  //drawX will draw an X on the div id selected

  function draw(id,player){
  	var ids='#'+id;
  	if (player ==='X')
  	{
  		console.log('the function draw in IN, and turn is X and the id is '+ ids);
  		$(ids).html('<img src="X.png"> ');
    }else if (player ==='O')
    {
    	console.log('the function draw in IN, and turn is O and the id is '+ ids);
    	$(ids).html('<img src="round.png"> ');
    }

  	switch (id) {
  		case 'case0':{
  			if (player ==="X")
  			{tBoard[0][0]='X';
  			}else if (player ==='O'){
  			 tBoard[0][0]='O';
  			}

  		}
  		break;
  		case 'case1':{
  			if (player ==="X")
  			{tBoard[0][1]='X';
  			}else if (player ==='O'){
  			 tBoard[0][1]='O';
  			}
  		}
  		break;
  		case 'case2':{
  			if (player ==="X")
  			{tBoard[0][2]='X';
  			}else if (player ==='O'){
  			 tBoard[0][2]='O';
  			}
  		}
  		break;
  		case 'case3':{
  			if (player ==="X")
  			{tBoard[1][0]='X';
  			}else if (player ==='O'){
  			 tBoard[1][0]='O';
  			}
  		}
  		break;
  		case 'case4':{
  			if (player ==="X")
  			{tBoard[1][1]='X';
  			}else if (player ==='O'){
  			 tBoard[1][1]='O';
  			}
  		}
  		break;
  		case 'case5':{
  			if (player ==="X")
  			{tBoard[1][2]='X';
  			}else if (player ==='O'){
  			 tBoard[1][2]='O';
  			}
  		}
  		break;
  		case 'case6':{
  			if (player ==="X")
  			{tBoard[2][0]='X';
  			}else if (player ==='O'){
  			 tBoard[2][0]='O';
  			}
  		}
  		break;
  		case 'case7':{
  			if (player ==="X")
  			{tBoard[2][1]='X';
  			}else if (player ==='O'){
  			 tBoard[2][1]='O';
  			}
  		}
  		break;
  		case 'case8':{
  			if (player ==="X")
  			{tBoard[2][2]='X';
  			}else if (player ==='O'){
  			 tBoard[2][2]='O';
  			}
  		}
  		break;
  		default:
  		break;

  	}
  	return tBoard;

  }// end of function

  
  //this function will tell if we should continue playing until 9, or there is a winner before 

   function winOrContinue(tBoard){
   	var X = 1 ;
   	var O = 0 ;
   	var noWinner = 2;

   	 	if( ((tBoard[0][0]=='X') && (tBoard[0][1]=='X')&& (tBoard[0][2]=='X')) ||
   	 		((tBoard[0][0]=='X') && (tBoard[1][1]=='X')&& (tBoard[2][2]=='X')) ||
   	 		((tBoard[0][0]=='X') && (tBoard[1][0]=='X')&& (tBoard[2][0]=='X')) ||
   	 		((tBoard[0][1]=='X') && (tBoard[1][1]=='X')&& (tBoard[2][1]=='X')) ||
   	 		((tBoard[0][2]=='X') && (tBoard[1][2]=='X')&& (tBoard[2][2]=='X')) ||
   	 		((tBoard[1][0]=='X') && (tBoard[1][1]=='X')&& (tBoard[1][2]=='X')) ||
   	 		((tBoard[2][0]=='X') && (tBoard[2][1]=='X')&& (tBoard[2][2]=='X')) ||
   	 		((tBoard[0][2]=='X') && (tBoard[1][1]=='X')&& (tBoard[2][0]=='X'))
   	 	  ){ 
   	 	  	

   	 	  	return X;

   	 	} else if 
   	 	  ( ((tBoard[0][0]=='O') && (tBoard[0][1]=='O')&& (tBoard[0][2]=='O')) ||
   	 		((tBoard[0][0]=='O') && (tBoard[1][1]=='O')&& (tBoard[2][2]=='O')) ||
   	 		((tBoard[0][0]=='O') && (tBoard[1][0]=='O')&& (tBoard[2][0]=='O')) ||
   	 		((tBoard[0][1]=='O') && (tBoard[1][1]=='O')&& (tBoard[2][1]=='O')) ||
   	 		((tBoard[0][2]=='O') && (tBoard[1][2]=='O')&& (tBoard[2][2]=='O')) ||
   	 		((tBoard[1][0]=='O') && (tBoard[1][1]=='O')&& (tBoard[1][2]=='O')) ||
   	 		((tBoard[2][0]=='O') && (tBoard[2][1]=='O')&& (tBoard[2][2]=='O')) ||
   	 		((tBoard[0][2]=='O') && (tBoard[1][1]=='O')&& (tBoard[2][0]=='O'))

   	 		){
   	 	  	swal("Good job!", "You clicked the button!", "success")
   	 	  	return O;
   	 	} else return noWinner;
   }// end of the function

});



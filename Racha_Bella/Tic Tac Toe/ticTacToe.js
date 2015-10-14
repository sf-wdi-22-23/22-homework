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
           if ($('#'+id).html()=='')
           {
            console.log('emptyyyyy');
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
          i=0;
          
            for (var j=0;j<3;j++){
              for(var k=0;k<3;k++){
                tBoard[j][k]=null;
              }
            }
            swal("Winner !", "O wins and the result is  O : "+ Owins + " and X : " + Xwins , "success");
                  $( ".box" ).empty();
        }
        else if (win == 1){
          Xwins++;
          i=0;
          
            for (var j=0;j<3;j++){
              for(var k=0;k<3;k++){
                tBoard[j][k]=null;
              }
            }
             swal("Winner !", "X wins and the result is  O : "+ Owins + " and X : " + Xwins , "success");
               $( ".box" ).empty();
        }else if ((win == 2)&& (i ===9)){
             swal("No Winner !", " and the result is  O : "+ Owins + " and X : " + Xwins , "success");
             
            for (var j=0;j<3;j++){
              for(var k=0;k<3;k++){
                tBoard[j][k]=null;
              }
            }
             $( ".box" ).empty(); 
  
        }

        if (i===9){
          i=0;
        }
      console.log('the i is '+ i);
           }else {
            swal("You clicked on a box already full !!", "Try another one :)");
            
            if (turn =='X'){
              turn ='X';
            }else turn ='O';
           }
	         
	    });
  $("#reset").on("click", function(){
  	var i,j;
    $( ".box" ).empty();
    for (i=0;i<3;i++){
    	for(j=0;j<3;j++){
    		tBoard[i][j]=null;
        Xwins=0;
        Owins=0;
    	}
    }

  	
  		
  	  	});

  //***********************************************FUNCTIONS*******************************************************//
  //draw will draw an O or an X on the div id selected and return the tBoard

  function draw(id,player){
  	var ids='#'+id;
  	if (player ==='X')
  	{
  		$(ids).html('<img src="X.png"> ');
    	}else if (player ==='O')
    	{
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

  
  //this function will tell if there is a winnerm if it returns 0 --> O wins  ; if it returns 1 --> X wins , if it returns 2 --> no one wins

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
   	 	  	
   	 	  	return O;
   	 	} else return noWinner;
   }// end of the function

});



function singing(){
var j=0;
for (i=0; i<5; i++)
   j= 5-i;
if (j === 1){
   console.log(j + " Bottle of beer on the wall");
   console.log(j + " bottle of beer");
   console.log ( "Take down and pass it around");
}else if (j>1){
   console.log(5-i + " Bottles of beer on the wall");
   console.log(5-i + " bottles of beer");
   console.log ( "Take down and pass it around");
}else if (j ===0 ){
   console.log( "No more Bottle of beer on the wall");
   console.log( "No more bottle of beer");
   
}

singing();
   


   
   
   
}

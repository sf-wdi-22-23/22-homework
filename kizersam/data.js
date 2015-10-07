

function Flower(){
   this.color = "red";
   this.petals = 32;
    this.smellsPretty= true;
  // Demonstrates a simple method in an object
   this.sniff = function(){
       console.log("Sniff Sniff Sniff!");
   };
 }


rose.sheLovesMe=function(){
    for(var i=0;i<=(this.petals-1);i++){
        if(i%2===0){console.log("she loves me")}
        else{console.log("she loves me not")}
    }
};


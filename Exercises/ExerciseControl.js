var tokens = 3; // Jimmy's tokens
var height = 4;
var age =12;
var adult = true;
var boss='looking';
var parkpass = true;
// Can he ride?
if ( tokens >= 5 && height >= 4 && age >=12) {
    console.log("ride");
} else if (age<12 && adult===true){
    console.log("ride");
}
else if (boss !== 'looking' ){
    console.log("sneak in");
}
else if (parkpass === true){
    console.log("ride for free");
}
else {
    console.log("Cannot ride");
}
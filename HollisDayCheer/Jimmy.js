var jimmy = {
	 tokens: 3,
	 age: 12,
	 height : 4,
	 withAdult :true,
	 parkPass :true,

}
var bossLooking = true;
// Can he ride?
if ( ((jimmy.tokens >= 5 || jimmy.parkPass)&& (jimmy.age>=12 || jimmy.withAdult) && jimmy.height>=4) || !bossLooking) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride")
}

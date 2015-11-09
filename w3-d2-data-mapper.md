data : { cohorts:

[var bestCohort : {
	id: 42,
	subject: "WDI",
	number: 22,
	classroom: 1
}],

[var almostBestCohort : {
	id: 43,
	subject: "WDI",
	number: 23,
	classroom: 2
}],
hobbies:[
var hobby1 : {
	name: "boating",
	cost: "very high"
},

var hobby2 : {
	name: "knitting",
	cost: "low"
},

var hobby3 : {
	name: "cooking",
	cost: "moderate"
}]}

if we were to use hobby objects on a larger scale, say dozens or hundreds, we'd want an individual id for each of them, as well as a few more data points within each, in order to make it more useful. perhaps, relative danger, skill level to get started, et al.a constuctor object would help us populate such an object, presumably an array, with more hobbies.

much of the same would be true if we were also comparing cohorts. We'd need an id, city location, class size, number of instructors/dir's, and perhaps even useful statistics about completetion rates, employment rates, or prices, to better see how these figures might deviate across time and locales.
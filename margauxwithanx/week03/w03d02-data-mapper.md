var bestCohort = {
	id: 42,
	subject: "WDI",
	number: 22,
	classroom: 1
};

var alsoBestCohort = {
	id: 43,
	subject: "WDI",
	number: 23,
	classroom: 2
};

var hobby1 = {
	name: "boating",
	cost: "very high"
};

var hobby2 = {
	name: "knitting",
	cost: "low"
};

var hobby3 = {
	name: "cooking",
	cost: "moderate"
};

Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types?
var Cohort = function(id, subject, number, classroom) { this.id = id; this.subject = subject; this.number = number; this.classroom = classroom; };

var bestCohort = new Cohort(42, "WDI", 22, 1); var alsoBestCohort = new Cohort(43, "WDI", 23, 2);

var Hobby = function(name, cost) { this.name = name; this.cost = cost; }; var hobby1 = new Hobby("boating", "very high"); var hobby2 = new Hobby("knitting", "low"); var hobby3 = new Hobby("cooking", "moderate");

Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?
Attributes:

id
name
cost
location
Methods:

Hobby.prototype.doHobby = function() {};
Hobby.prototype.deleteHobby = function() {};

Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?
Attributes:

id
subject
number
classroom
Methods:

Cohort.prototype.learn = function() {};
Cohort.prototype.homework = function() {};
Cohort.prototype.discuss = function() {};

Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?
Attributes:

id
name
Methods:

do
where
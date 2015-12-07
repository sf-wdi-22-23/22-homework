//Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types?

function bestCohort() {
	this.id = 42;
	this.subject = "WDI";
	this.number = 22;
	this.classroom = 1;
};

function alsoBestCohort () {
	this.id = 43; 
	this.subject = "WDI";
	this.number = 23;
	this.classroom =2;
	}

function hobby1 () {
	this.name = "boating";
	this.cost = "very high";
}

function hobby2 (){
	this.name = "knitting";
	this.cost = "low";
}

function hobby3 (){
	this.name = "cooking";
	this.cost = "moderate";
}

//Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?

Attributes for hobby data: amount of hours spent and expenses of hobby.  
If using the constructor method to manage object types, I would use prototypes to manage hobby data. If needed, we can also place a method in the prototype if we need to proceed with an additional step for finding a certain property. (i.e... if x>6, then console.log("yes"; else "no"));

//Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?

Attributes for Cohort: name of instuctors and room number. Method: use a function that would help segregrate between the two different classes. (i.e. if statement, if this.number === 22 || 23, return bestcohort)

//Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?

For a generic DataObject, I would use class and property for attributes. Methods: arrays and/or constructors + prototypes.

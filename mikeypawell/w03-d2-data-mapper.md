1) Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types?

function Cohort(id, subject, number, classroom) {
	this.id = id,
	this.subject = subject,
	this.number = number,
	this.classroom = classroom
};

var bestCohort = new Cohort(42, "WDI", 22, 1)

var Hobby(name, cost) {
	this.name = name,
	this.cost = cost 
};

var hobby1 = new Hobby("boating", "very high")


2) Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?

attributes
	-id
	-title
	-cost (a number value)

methods
	-should be able to access all attributes
	-add another hobby (keep IDs in order)
	-adjust information within a hobby
	-delete a hobby

	***basically CRUD


3) Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?

attributes 
	-start-date
	-graduation-date
	-instructors
	-students

methods
	-should be able to access all attributes
	-add another cohort (keep IDs in order)
	-adjust information within a cohort
	-delete a cohort
	-change instructors
	-drop or add students


4) Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?


For a generic DataObject I would always give a 
	-title or name
	-id
	-some defining characterstic
	-preferably another defining chracteristic

Methods
	-Create
	-Read
	-Update
	-Delete


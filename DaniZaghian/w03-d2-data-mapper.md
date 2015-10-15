Q: Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types?

A:  A JSON representation of the same data: 

	var data = {
		"cohorts": [{
			id: 42,
			subject: "WDI",
			number: 22,
			classroom: 1
		},
		{
			id: 43,
			subject: "WDI",
			number: 23,
			classroom: 2
		}],
		"hobbies": [{
			id: 1,
			name: "boating",
			cost: "very high"
		},
		{
			id: 2,
			name: "knitting",
			cost: "low"
		},
		{
			id: 3,
			name: "cooking",
			cost: "moderate"
		}]

	};

Q: Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?

A: Attributes: name, cost, skill-level, time-todo, season, location. 
   Methods: hobbies.whatSeason (checks if a hobby is good for the current season), hobbies.lowCost (checks if a hobby is under $20), hobbies[i].changeCost

Q: Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?

A: Attributes: id, subject, classroom, school, students, teachers
   Methods: cohorts[i].addStudent, cohorts[i].deleteStudent, cohors[i].setClassroom, etc

Q: Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?

A: Attributes: type, name, id, properties, url, color
   Methods: dataObject[i].setURL, dataObject[i].setColor, dataObject[i].setName, anything that can take the value of a current property and change it to a different one (or change many)

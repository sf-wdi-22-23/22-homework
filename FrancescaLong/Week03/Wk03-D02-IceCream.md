This is the RESTful document for how we could lay out the ice cream example:

Instructions:
We need to be able to get information about specific flavors, as well as all of the flavors we have in our database. We also want to get some flavors by category, like "fruity", "gluten free", or "chunky". Finally we want to add one POST route that allows users of our api to add new flavors!

// My pseudo-code routes:

GET ALL FLAVORS "/flavors"

GET FLAVORS BY ID "/flavors/:id"

GET ALL FLAVORS BY TYPE "/chocolate"

GET CHOCOLATE SPECIFIC TYPE: "/chocolate/:id"

GET FLAVORS BY TYPE "/flavors/:id/type/:id"

POST A NEW FLAVOR "
		flavor: chocolate everything
		description: chocolate with chocolate goo, chocolate chips and brownies
		type: chocolate
		
		id: assigned by database (max id number + 1)
		type id: assigned database (max id number + 1)
		"
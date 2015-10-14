REST API homework w03d01

Say we want to create an API similar to the one above, that returns data about icecream. We need to be able to get information about specific flavors, as well as all of the flavors we have in our database. We also want to get some flavors by category, like "fruity", "gluten free", or "chunky". Finally we want to add one POST route that allows users of our api to add new flavors!

GET ALL ICECREAMS "/icecreams"
GET ALL FLAVORS "/icecreams/categories/flavors"
GET FLAVOR BY ID "/icecreams/categories/flavors/:id"
GET FLAVORS BY CATEGORY "/icecreams/categories/:id/flavors"
POST NEW FLAVOR "/icecreams/categories/:id/flavors"


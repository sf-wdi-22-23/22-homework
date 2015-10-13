// Ice Cream Pseudo-code Routes:

// All ice cream
GET ALL ICE CREAM FLAVORS "/flavors"

// Ice cream and the ID associated with each flavor
GET ALL ICE CREAM BY ID "/flavors/:id"

//each flavor and their ingredients
GET ALL ICE CREAM BY INGREDIENTS "flavors/ingredients"

//in the ingredients, look for fruit
GET ALL ICE CREAM BY FRUIT "/flavors/ingredients/fruit"

//texture of ice cream as smooth or chunky
GET ALL ICE CREAM BY TEXTURE "/flavors/texture"

//add new flavors, to include all elements of ingredients
POST NEW FLAVORS "newFlavors/ingredients/"
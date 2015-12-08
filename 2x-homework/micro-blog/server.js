//Server-Side Javascript 
console.log("connected to server!");

//leads the express library to the app
var express = require("express"),
    app = express(),
    path = require("path");
    bodyParser = require("body-parser");

//var where = require("./utils/where");

//var db = require('./models');



// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//DATA of list for our JSONs

var list = [
{id: 0, name: "Walk the marathon!"},
{id: 1, name: "To eat healthier!"},
];

//route to show index page view
app.get("/", function (req, res) {
    res.render("index", {list:list});
  });



//route to get all data from the array list
app.get("/api/list", function (req,res){
	//sends data as json
	res.json(list);
});

//api route to create a new entry for the list
app.post("/api/list", function (req,res){
var newList = req.body;
//adds a unique id;
if (list.length !== 0){
	newList.id = list[list.length-1].id+1; 
}
	else {
		newList.id=0;
	}
	//pushes unique id into json
	list.push(newList);
	res.json(list);
});
	





//sets port
app.listen(3000, function (){
  console.log("listening on port 3000");
});
console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	var app = new App();
	app.addPost();
  	app.deletePost();

});

  function App(){}

  App.prototype.addPost = function () {
  	$("#submit").on("click", function(e) {
  		var input = $("#input").val();
  		var ul = $("ul").append("<li class='list-group-item'>" + input + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li>");
  		console.log(ul);
  	});
  };

  App.prototype.deletePost = function () {
  	$("ul").on("click", function(e) {
  		console.log(this);
  		this.remove();
  	});
  };
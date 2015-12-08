    Parse.initialize("3C7umtyvVc56XRExGaCF5Cb07SURokCwoJSi7MBG","kJnlqRve8LGJakYWqhbYiQ66CJ7nz1Yaskn09HpI");

console.log("Sanity Check: JS is working!");

var BlogPost = Parse.Object.extend("newBlogPost");
//querying the newBlogPost table
var query = new Parse.Query(BlogPost);
// query.get("6m4KTpgFzh",{
	query.find({
  success: function(object) {
  	console.log(object);
  },
  error: function(error) {
  }
});

$(document).ready(function(){

$('form').submit(function(){
	event.preventDefault();
	var newBlogPost = $('#content').val();
	console.log(newBlogPost);
// CREATE PARSE OBJECT
var Post = Parse.Object.extend("newBlogPost");
var post = new Post();
post.save({content: newBlogPost}).then(function(object) {
});

	var deleteButton = '<button id="delete" class="btn btn-danger"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>';
$('#blogContent').prepend('<div class="panel panel-default"><div class="panel-body">'+ newBlogPost+deleteButton+'</div></div>');
	$('form')[0].reset();

//delete button
// $( document ).on( "click", "#delete", function() {
	$('#delete').click(function(){
    $(this.parentElement.parentElement).remove();
    post.destroy({
    	content: newBlogPost
    });
    console.log("blogpost deleted")
} ); 
//end of delete

});


});

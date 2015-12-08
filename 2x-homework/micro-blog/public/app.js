// CLIENT-SIDE, event listeners for submit forms
Parse.initialize("TlOemqdqa7jK4DZCj3RGrucO7HRJYAnJz0z5IBK6", "8WVN5smVVda5nHOcNqIUwT8kqgUOfAzmvgG7Dx50");
var Post = Parse.Object.extend("Post");
var post = new Post();

console.log("JS is working"); 
// Calls function, on submit
$(document).ready(function(){
  Submitter();
});

// function definitions



function Submitter() {
  // set event listeners
  $("#new-list-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    post.save({ 

}, {
  success: function(Post) {
    console.log("The object was saved successfully.");
    alert("yay! it worked");

  },
  error: function(Post, error) {
    // The save failed.
    // error is a Parse.Error with an error code and message.
  }
});

    // post serialized form to server
    $.post("/api/list", $(this).serialize(), function(response){
      // append lsit to the ejs
      var newList = response;
      var listString = makeString(newList);
      $("#list-ul").prepend(listString);
      // reset the form 
      // $("#submitButton")[0].reset();
    });
  });

}



function makeString(list){
  return '<li class="list-group-item"><h4 class="list-group-item-heading">' + list.name +
  '</h4><button data-id='+ list.id + ' type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
  '</li>';
}




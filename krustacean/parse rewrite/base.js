Parse.initialize("N8XfwKZnBHwZRKSREAxaCTQM3gXbIGSUDQgMJ8jT", "rXF9Ekvm9KUoAT0A69qRp2NRlXZf1xN2aREhVrX9");
var Post = Parse.Object.extend("post");
var query = new Parse.Query(Post);

var dHtml = function(date){
    return '<p><small><i> Added ' + date.toLocaleDateString();
}

var addPostToPage = function(post){
  $('#all-posts').prepend( postHtml(post.id) + post.get('title') + '</h3>' + '<p>' + post.get('content') + '</p>' + dHtml(post.get('createdAt')) + '</div></div></div>');
}

//find a certain post then delete it from the database
var destroyPost = function(id){
  query.get(id,{
    success: function(object) {
      object.destroy({
        success: function(myObject) {
          console.log("destroyed");
        },
        error: function(myObject, error) {
          console.log("The delete failed %s", error)
        }
      })
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

// delete post when the X is clicked
$(document).on('click', '.delete',  function(){
  destroyPost($(this).data('id'))
  $(this).parents()[2].remove();
});


$(document).ready(function() {
  // load blog posts onto the page from Parse
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        addPostToPage(results[i])
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

  // get input from the title vals and textarea
  $('#submit-button').on('click',function(){
    var post = new Post();
    $title = $('#new-post-title').eq(0).val();
    $content = $('#new-post').eq(0).val();
    //save to parse
    post.save({content: $content , title : $title}, {
      success: function(post) {
        console.log(post);
        addPostToPage(post);
      },
      error: function(post, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
    //clear forms
    $('#new-post-title').eq(0).val('');
    $('#new-post').eq(0).val('');
  });
});

var postHtml = function(id){
  return '<div class="col-sm-8 col-sm-offset-2"><div class="thumbnail">'
  + '<div class="caption"><button type="button" name="button" class="btn btn-xs pull-right delete" data-id="'+ id + '">'
  + '<span class="glyphicon glyphicon-remove"></span></button>'
  + '<h3> '
}

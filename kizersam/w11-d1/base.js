console.log("Sanity Check: JS is working!");

$(document).ready(function(){
Parse.initialize("Fno1xDqrSAT5JWcef39LHUFuzuM9jOp4IU9zrOUP", "DbvFuklNTJx5FPXl01nyBoNFuwibarmKcMCf19pv");
var NewPost = Parse.Object.extend("Post");
var query = new Parse.Query(NewPost);
query.find({
  success: function(objects) {
    // console.log("success: " + objects);
    objects.forEach(function(object){
    	$("ul").prepend("<li><div class='panel panel-primary'><div class='panel-heading'>"+object.get("Title")+"</div><div class='panel-body'>"+object.get("post")+"<span class='glyphicon glyphicon-trash pull-right' id = '"+object.id+"'></span></div></li>");
 
 		deletePost();
		numberOfPosts();   
    });

  },
  error: function(object, error) {
  	console.log("error:" + error);
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});
function savenewpost(title, body) {
	
	var newpost = new NewPost();

	newpost.set("Title", title);
	newpost.set("post", body);
	
	newpost.save(null, {
	  success: function(thispost) {
	  	$("ul").prepend("<li><div class='panel panel-primary'><div class='panel-heading'>"+title+"</div><div class='panel-body'>"+body+"<span class='glyphicon glyphicon-trash pull-right'></span></div></li>");
		$("#input-box").val("");
		$("#title-input").val("");
		deletePost();
		numberOfPosts();
	    // Execute any logic that should take place after the object is saved.
	    console.log('New object created with objectId: ' + newpost.id);
	  },
	  error: function(thispost, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    console.log('Failed to create new object, with error code: ' + error.message);
	  }
	});
 	}
 	$('[data-toggle="tooltip"]').tooltip(); 
 	
 	//Here I have my button function
	$(".btn").on("click", function(){
		var post = $("#input-box").val();
		var title= $("#title-input").val();
		
		savenewpost(title, post);
	});

	var deletePost= function(){
		$(".glyphicon").on("click",function(e){ 
		var gliphy = $(this);
			query.get($(this).attr('id'), {
			  success: function(myObject) {
			    myObject.destroy();
			    gliphy.closest("li").remove();
				numberOfPosts();
			  },
			  error: function(myObject, error) {
			    // The delete failed.
			    // error is a Parse.Error with an error code and message.
			  }
			});
			
			}
		);
	};
	
	var numberOfPosts= function(){
		var postCount = $("li").length;
			if(postCount === 1){
				$("h3").text("There is 1 post on this page.");
			}
			else{
				$("h3").text("There are "+postCount+" posts on this page.");
			}
	};

});

// Here are the two post display formats I was playing around with
// "<li class='list-group-item'>"+post+"<span class='glyphicon glyphicon-trash pull-right'></span></li>"	
// "<li><div class='panel panel-primary'><div class='panel-heading'>"+title+"</div><div class='panel-body'>"+post+"</div><span class='glyphicon glyphicon-trash pull-right'></span></li>";


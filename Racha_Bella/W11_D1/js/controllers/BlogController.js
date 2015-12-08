
var app = angular.module("blogApp", []);

app.run(function() {
    Parse.initialize("a6I1w9v0CWAhi3lIxcmuxtOuKRKqNUeYCkPs3oew", "veZ36HJjf59npmZU5sXxcnRg6FGD1mm1O5XNSPHL");
  });

app.controller("blogCtrl", ["$scope", function ($scope) {

	var Post = Parse.Object.extend("Post");
	var post = new Post();
	$scope.counter = 0;
	$scope.newPost = {};
	$scope.posts=[];
	var query = new Parse.Query(Post);
	
	//fetching posts from Parse : 
	query.find({
		success: function(posts) {
			console.log(posts);
			$scope.counter= posts.length;
			for (var i = 0; i < posts.length; i++){ 
		      $scope.posts.push( {
		      	id: posts[i].id,
		      	name:posts[i].get('name'),
		      	body: posts[i].get('body')
		      });
		    }

		      $scope.$apply();
		      console.log($scope.posts)
    // Comments now contains the last ten comments, and the "post" field
    // has been populated. For example:
		}
	});

	//adding a post: 
	$scope.addPost = function () {
		post.save($scope.newPost).then(function(object) {
 		 	//alert("yay! it worked");
 		 	$scope.posts.push($scope.newPost);
 		 	$scope.counter++;
 		 	$scope.newPost={};
 		 	$scope.$apply();

		});
	}

	$scope.deletePost = function (post) {
		var i = $scope.posts.indexOf(post);
     	$scope.posts.splice(i,1);
     	$scope.counter--;
		query.get(post.id, {
  			success: function(p) {
  				console.log("the post i want to delete is", p);
     			p.destroy({
     				success:function(a){
     					
     				},
     				error: function (a, error) {

     				}
     			});
     			
  			},
  			error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  			}
		});
     	$scope.$apply();
		
	}

}])
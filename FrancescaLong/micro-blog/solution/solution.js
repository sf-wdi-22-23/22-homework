console.log("Sanity Check: JS is working!");

$(document).ready(function(){
// for that fun hover hooray
 $('[data-toggle="tooltip"]').tooltip();	
  app = new MicroBlog();
  app.addEventListeners();
  app.loadFromLocalStorage();
});

function MicroBlog(){
	// if there is local storage items, get that, otherwise create an empty array
	this.posts = JSON.parse(localStorage.posts) || [];
	// assigning our jQuery objects that we will need
	// the $ after the 'this.' is a convention to show that these are jQuery objects.
	this.$submitButton = $('.btn');
	this.$post = $('#post');
	this.$blogDiv = $('.list-group');
}

MicroBlog.prototype.addEventListeners = function(){
	// so we have access to 'this', aka our 'app' aka 'MicroBlog'
	var blog = this;
	this.$submitButton.on('click', function(event){
		event.preventDefault();
		blog.createPost(blog.$post.val());
	});
}

MicroBlog.prototype.createPost = function(content){
	var post = new Post(content);
	this.posts.push(post);
	this.render(post);
	// saving to local storage
	localStorage.setItem("posts", JSON.stringify(this.posts))
}

// on load, render items from local storage. Now you can refresh, and they will still be there!
MicroBlog.prototype.loadFromLocalStorage = function(){
	var blog = this;
	this.posts.forEach(function(post){
		console.log(post.content)
		blog.render(post);
	})
}

MicroBlog.prototype.render = function(post){
	// construct HTML string
	var html = "<li class='list-group-item'>" + post.content + "<span class='glyphicon glyphicon-remove pull-right'></span></li>";
	// put it on DOM
	this.$blogDiv.append(html);
	// clear the contents of the form
	this.$post.val('');
	// add event listener to the delete glyphicon
	// TODO: dynamic event listeners that don't need to be called later
	this.listenToDelete();
}	

MicroBlog.prototype.listenToDelete = function(){
	var blog = this;
	$('.glyphicon-remove').on('click', function(event){
		console.log(event.target)
		blog.delete(this.parentElement)
	})
}

// When the delete glyphicon is clicked, remove it from the DOM
// TODO: Remove it also from LocalStorage and the app.posts!
MicroBlog.prototype.delete = function(post){
	post.remove();	
}


function Post(content){
	this.content = content;
}

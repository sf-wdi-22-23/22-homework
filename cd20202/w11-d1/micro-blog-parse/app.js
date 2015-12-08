Parse.initialize("rGUykmwSQuq0saepWPoBsdGOUOL1tjqGNJU6OQSQ",
    				 "ISk59kzwQzzL7nyat8DjLBCKTKXmcMZnpJKcwsR0");

var PostsObject = Parse.Object.extend("PostsObject");
var post = new PostsObject();

post.save({
			title: "", 
			imgUrl: "", 
			post: "",
			link: "", 
			linkname: "", 
			author: ""})
		.then(function(obj) {
			alert("Wicked Awesome!");
		});



$(document).ready(function(){
	
	//created by Chris Dawson

	var postCounter = 1;
	var postID = [];
	$blogcon = $('#blog');

	function BlogPost(title, img_url, post_text, link, link_title, author) {
		if (title === "") {
			title = "Untitled";
		}
		if (img_url === "") {
			img_url = "http://refugeeks.com/wp-content/uploads/2014/04/203-Non-Auth-Information1-600x480.jpg";
		}
		if (post_text === "") {
			post_text = "I'm too cool for school because my name is [REDACTED] so I don't fill things out";
		}
		if (link_title === "") {
			link_title = "Check it out!";
		}
		if (link === "") {
			link = "https://www.youtube.com/watch?v=0hrqZjw6mUY";
		}
		if (author === "") {
			author = "Anonymous";
		}
		var blogDiv = '<div class="row bpost" id="post' + 
					postCounter + '"><div class="col-xs-3 postimage text-center"><img class="pImg post_img_before post' + 
					postCounter + '" src="' + img_url + '"></div><div class="col-xs-7"><h2>' + 
					title + '</h2><p class="togglesh">' + 
					post_text + '</p><p class="togglesh"><button><a href="' + link +'">' + 
					link_title + '</a></button></p></div><div class="col-xs-2 text-center"><p class="postTracker">' + 
					postCounter +'</p><p class="togglesh postAuthor">' + 
					author +'</p></div></div>';

		addBlogPost(blogDiv);
		postID.push("'#post" + postCounter + "'");
		console.log(postID[postCounter-1]);

		return postCounter++, postID;
	}
  	var addBlogPost = function(rv1) {
  		$blogcon.children().first().after(rv1);
  		$('.bpost').addClass('shpost');
  		$('.togglesh').hide();
  		$('#post-track').text(postCounter);
  	};

  	var addBlogListeners = function() {
  		return $('.bpost').on('click', toggleDisplay);
  	};
  	var addNewBlogLisenters = function() {
  		$('.bpost').off();
  		$('.bpost').removeClass('shpost');
  		$('.togglesh').hide();
  		$('.bpost').children().find('.pImg').addClass('post_img_before');
  		$('.bpost').children().find('.pImg').removeClass('post_img_after');
		$('.bpost').addClass('shpost');
  		return $('.bpost').on('click', toggleDisplay);
  	};

  	var toggleDisplay = function() {
  		$(this).children().find('.pImg').toggleClass('post_img_before');
  		$(this).children().find('.pImg').toggleClass('post_img_after');
		$(this).toggleClass('shpost');
		$(this).children().find('.togglesh').toggle();
  	};

  	

	var post1 = new BlogPost("[REDACTED]", "", "", "", "", "");

	var post2 = new BlogPost("Super Smash", 
								"http://www.ssbwiki.com/images/d/db/User.png", 
								"blah blah blah, blah blah blah. Super Smash Bros is a really cool game, especially 8 player free-for-all on the Wii-U.", 
								"https://www.google.com",
								"Super Smash Bros", 
								"cd20202");

	var post3 = new BlogPost("Halo 5 Is Almost Here!", 
								"http://zoneg.ru/uploads/posts/2015-03/1425931500_Halo_5_Guardians_icon.png", 
								"Lest I remind everyone, Oct. 27th, 2015 is the release date for Halo. Remember, I played the Beta and I will destroy you.", 
								"https://en.wikipedia.org/wiki/Halo_5:_Guardians",
								"Halo 5 Guardians WIKI", 
								"cd20202");

	var post4 = new BlogPost("Battlefront Beta MEOW OUT!", 
								"https://cdn0.iconfinder.com/data/icons/black-religious-icons/256/Darth_Vader.png", 
								"Title says it all bro. Check out the beta meow brotato chip!", 
								"http://starwars.ea.com/starwars/battlefront/beta",
								"Battlefront Beta", 
								"cd20202");


	addBlogListeners();

	$('#createPost').on('click', function(e) {
		e.preventDefault();

		$title = $('#Title');
		$imgURL = $('#ImageURL');
		$post = $('#Post');
		$linkname = $('#LinkName');
		$link = $('#Link');	
		$author = $('#Author');

		var newpost = new PostsObject();
		newpost.save({
					title: $title.val(), 
					imgUrl: $imgURL.val(), 
					post: $post.val(),
					link: $link.val(), 
					linkname: $linkname.val(), 
					author: $author.val()
		}).then(function(obj) {
			alert("Wicked Awesome!");
		});

		addNewBlogLisenters();

		$title.val("");
		$imgURL.val("");
		$post.val("");
		$link.val("");
		$linkname.val("");
		$author.val("");
	});


	$('[data-toggle="tooltip"]').tooltip();
});













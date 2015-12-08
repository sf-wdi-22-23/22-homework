console.log("Sanity Check: JS is working!");

var ids=0;
var content; // a content
var p; // a post
var div; // the div that will be added after every click
var name; // the name of the poster
var posts=[]; //an array for all the posts
var com; //a comment

$(document).ready(function(){
	// var posting = new PostsHandler();
	// posting.addListeners();
});

function Post(name,id, content){
	this.name=name;
	this.id = id;
	this.content = content;
	this.comment = [];
	this.addComment= function(com){
		this.comment.push(com);
	}
}

function PostsHandler() {
	this.posts= [];
	console.log ('this.posts = ' + this.posts);
	this.addListeners= function(){
		$('.text-Input').keydown(function(event){
			if(event.keyCode == 13){
	        	//$("#button-Post").click();
	        		ids++;
					debugger;
					content = $('.text-Input').val();
				    name    = $('.name-Input').val();
				    if (content !==''){
				    p = new Post(name,ids,content);
				    posts.push(p);
				    addPost(ids,name,content);
				    $('.post-num').val(''+posts.length); 
				    }else if (content ==='')
				    {
				    	alert("You should write something, try again");
				    }	
			}
		});

		$('#button-Post').on('click', function(){
					ids++;
					debugger;
					content = $('.text-Input').val();
				    name    = $('.name-Input').val();
				    if (content !==''){
				    p = new Post(name,ids,content);
				    console.log('the post is' + p);
				    console.log('this is '+ this);
				    posts.push(p);
				    console.log('the posts are ' +posts);
				    addPost(ids,name,content); 
				    }else if (content ==='')
				    {
				    	sweetAlert("Oops...", "You should wrtie something!", "error");
				    }
		});
		// This is the close button which will remove the post, from the html , and from the posts array, and the comments with
		$(document).on('click','#boxclose', function(){
			var id = $("#boxclose").closest("div").attr("id");
  			$("#"+id).remove();
  			posts.splice(id-1,1);
  			console.log(posts[id-1]);
  			swal("Post deleted!");
  			$('.post-num').val(''+posts.length);
		});

		//This is the add comment button, where i will be adding comments
		$(document).on('click','#button-com', function(){
			//$('#comment-box').css('visibility','visible');
			$('#comment-box').fadeIn( "slow" );
			//$('#comment-box').css('visibility','visible');
			$('#section1').css('opacity', '0.6');
			$('#section2').css('opacity', '0.6');
		    id = $(this).closest("div").attr("id");
			console.log('it is the id :  '+ id);
			$(document).on('click','.com-button', function(){
				name = $(this).parent().find('#name').val();
				com  = $(this).parent().find('#com').val();
				console.log('the commet is ' + com+ ' name is ' + name);
				if (com !==''){
					$('#comment-box').fadeOut( "slow" );
					$('#section1').css('opacity', '1');
					$('#section2').css('opacity', '1');
				}else if(com === ''){
					
				}
				if((name!=='')&&(com !=='')){
					$('#'+id).append('<p><strong>'+ name+' </strong>'+ com+ '<br>');
				}
				$(this).parent().find('#name').val('');
			    $(this).parent().find('#com').val('');
			});
			
			$(document).on('click','.cancel-button', function(){
				$('#section1').css('opacity', '1');
				$('#section2').css('opacity', '1');
				$('#comment-box').fadeOut( "slow" );
			}); 					
		});	
	};
}

function addPost(ids,name,content){
		var div ='<div id= \"'+ ids + '\"'+'class = "col-lg-3 col-sm-3 box1" style ="display:none"> <a class="boxclose" id="boxclose"></a> <h1 id="hOne">'
		+ name + '</h1><p>'
		+ content 
		+ '</p><br/><a href="#" id="button-com" class="btn btn-danger btn-lg btn-huge lato" data-toggle="modal" data-target="#myModal"> Comment</a><br><hr> ';
		$('.row1').prepend(div);
		$(".col-sm-3").slideDown('slow');
		$('.text-Input').val('');
		$('.name-Input').val('');
	};



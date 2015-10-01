$(document).ready(function () {
	$("#hascheezburger").css({ "margin-left": "1500px", "margin-top": "-398px"});
    $('#button1').click(function() {
        $("#pet").html('<img src="http://vignette2.wikia.nocookie.net/thehungergames/images/4/48/Happy_cat.jpg/revision/latest?cb=20121008044759"> ');
    });
    $('#button2').click(function() {
    	$("#cheezburger").animate({ "margin-left": "-9999px" }, 2000);
    	$("#hascheezburger").animate({ "margin-left": "0px" }, 4000);
    });
    $('#button3').click(function() {
        $("#grumpy img").css({'border': '20px solid red'});
    });
});

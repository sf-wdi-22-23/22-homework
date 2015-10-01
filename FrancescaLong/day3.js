$(document).ready(function() {

$("#b1").on("click", function() {
       // change the image, and make sure this image path exists ...
      $("#b1i").attr("src", "i20150806_071526-copy.jpg");
      // make it disappear 
      setTimeout(function(){
        $("#b1i").hide();
              },1000);
  });

$("#b2").on("click", function() {
       // change the image, and make sure this image path exists ...
      $("#b2i").attr("src", "i20150806_071526-copy.jpg");
      // make it appear 
      setTimeout(function(){
        $("#b2i").show();
              },1000);
  });

$("#b3").on("click", function() {
       // change the image, and make sure this image path exists ...
      $("#b2i")."p";
      // change the color 
      color: blue;
  });

});
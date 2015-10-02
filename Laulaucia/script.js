
    $(document).ready(function() {
      $("#red").on("click", function() {
          $("#img").fadeOut("slow");
      });
      $("#blue").on("click", function(){
          $("#img").animate({width: "50px"}, 1000);
      });
      $("#green").click(function(){
          $("#img").show();
      });
    });

  
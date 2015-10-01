$(document).ready(function() {
  $( "#press" ).click(function() {
  $( "img" ).hide( "slow", function() {
    alert( "Animation complete." );
  });
});
});
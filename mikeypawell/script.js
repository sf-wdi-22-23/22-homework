$(document).ready(function() {

    $("#buttonOne").on('click',function() {
        $('#buttonOne').slideUp(1000).delay(500).slideDown(1000);
    });
    $("#buttonTwo").click(function() {
        $("#buttonTwo").hide();
    });
    $("#buttonTwo").click(function() {
        $("#buttontTwo").fadeOut("slow");
    });

});

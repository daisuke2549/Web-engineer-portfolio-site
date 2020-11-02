
$('#toggle').click(function() {
    $(this).toggleClass("active");
    $('#overlay').toggleClass("open");
    if ($("html div").not("#overlay").hasClass("blur")){
       $("html div").not("#overlay").not(".button_container").removeClass("blur")
    }else{
       $("html div").not("#overlay").not(".button_container").addClass("blur")
    }
 });

$('#toggle').click(function() {
    $(this).toggleClass("active");
    $('#overlay').toggleClass("open");
    if ($("html div").not("#overlay").hasClass("blur")){
       $("html div").not("#overlay").not(".button_container").removeClass("blur")
    }else{
       $("html div").not("#overlay").not(".button_container").addClass("blur")
    }
 });
 
 $('.menu_aboutme').click(function() {
   $("html,body").animate({scrollTop:$(".profile_title").offset().top});
   $('#overlay').removeClass("open");
   $('html div').removeClass("blur");
   $("#toggle").toggleClass("active");
 });
 $('.menu_introduction').click(function() {
   $("html,body").animate({scrollTop:$("#introduction_section").offset().top});
   $('#overlay').removeClass("open");
   $('html div').removeClass("blur");
   $("#toggle").toggleClass("active");
 });
 $('.menu_backgrounds').click(function() {
   $("html,body").animate({scrollTop:$("#backgrounds_section").offset().top});
   $('#overlay').removeClass("open");
   $('html div').removeClass("blur");
   $("#toggle").toggleClass("active");
 });

 $('.menu_skills').click(function() {
   $("html,body").animate({scrollTop:$("#skills_section").offset().top});
   $('#overlay').removeClass("open");
   $('html div').removeClass("blur");
   $("#toggle").toggleClass("active");
 });

 $('.menu_services').click(function() {
   $("html,body").animate({scrollTop:$("#service_section").offset().top});
   $('#overlay').removeClass("open");
   $('html div').removeClass("blur");
   $("#toggle").toggleClass("active");
 });


 $('.menu_my_works').click(function() {
   $("html,body").animate({scrollTop:$("#my_works_section").offset().top});
   $('#overlay').removeClass("open");
   $('html div').removeClass("blur");
   $("#toggle").toggleClass("active");
 });

 $('.menu_contact').click(function() {
   $("html,body").animate({scrollTop:$("#contact_section").offset().top});
   $('#overlay').removeClass("open");
   $('html div').removeClass("blur");
   $("#toggle").toggleClass("active");
 });

 $('.menu_sns').click(function() {
   $("html,body").animate({scrollTop:$("#sns_section").offset().top});
   $('#overlay').removeClass("open");
   $('html div').removeClass("blur");
   $("#toggle").toggleClass("active");
 });


 $(function () {
   $('.myname').textillate();
 })
 $(function () {
   $('.worker_type').textillate();
 })


 $(function() {
     $('.copyright p').textFx({
     type: 'rotate',
     iChar: 300,
     iAnim: '100'
 });
 });


$(window).scroll(function () {
  var now = $(window).scrollTop();
  if (now > 500) {
    $('.page-top').fadeIn("slow");
  } else {
    $('.page-top').fadeOut('slow');
  }
});

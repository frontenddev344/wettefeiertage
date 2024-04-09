$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
      });
  });
  $(document).ready(function(){
    $(".close").click(function(){
        $("body").removeClass("menuToggle");
    });
  });
  
$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});
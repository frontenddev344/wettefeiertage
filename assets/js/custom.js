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

document.addEventListener("DOMContentLoaded", function() {
    var acceptCookiesBtn = document.getElementById("accept-cookies");
    var cookiesPopup = document.getElementById("cookies-popup");
  
    acceptCookiesBtn.addEventListener("click", function() {
        cookiesPopup.style.display = "none";
        // You can add code here to set a cookie to remember the user's choice
    });
  });
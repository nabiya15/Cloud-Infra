$(document).ready(function(){
    /* Nav-scroll script */
    $(window).scroll(function(){
      if($(window).scrollTop() >=100){
        $(".navbar").addClass("navbar-scrolled");
      }else{
        $(".navbar").removeClass("navbar-scrolled");
      }
    })
    
    /* Active Links */
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");
    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      
      // Get current scroll position
      let scrollY = window.pageYOffset;
      // Now we loop through sections to get height, top and ID values for each
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        
        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ){
          document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.add("active");
        } else {
          document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.remove("active");
        }
      });
    }

})

/* Smooth Scroll */
const links = document.querySelectorAll(".scroll");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

/* window.onbeforeunload = function () {
window.scrollTo(0, 0);
} */

/* Parallax */
$(window).scroll(function(){
	parallax();
})

function parallax(){
	var windowScroll=$(window).scrollTop();
	$(".parallax").css("background-position", "center "+(windowScroll*0.75)+"px");
}

/* Off canvas */
$(function () {
    'use strict'
  
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open');
      $('.nav-link').css('font-size: 10em');
    })
    $('.nav-link').on('click', function(){
        $('.offcanvas-collapse').removeClass('open');
    })
})


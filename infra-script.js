$(document).ready(function(){
  /* Personalized welcome- comment this section of code while editing on local*/
  let fullname= window.top.staticData.identity.ProperName;
  let firstname = fullname.split(" ")[0];
  console.log(firstname);
  $(".username").textContent=firstname;

  
  $(this).scrollTop(0);
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
    
    /* Amination on offset */
    AOS.init({ // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation);
    });
    
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
  
  /* Scroll Button */
  //Get the button:
  mybutton = document.getElementById("toTop");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  
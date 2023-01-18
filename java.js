// Autoplay Slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// responsive Header

$(document).ready(function () {
  $(".menu-trigger").click(function () {
    $("ul li").slideToggle(500);
  }); //end slide toggle

  $(window).resize(function () {
    if ($(window).width() > 500) {
      $("ul li").removeAttr("style");
    }
  }); //end resize
}); //end ready

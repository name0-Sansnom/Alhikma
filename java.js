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

// slick testimonials caroussel
$(document).ready(function () {
  $(".carousel").slick({
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
});

// about us js script start
ScrollReveal().reveal(".team1", { delay: 300 });
ScrollReveal().reveal(".team2", { delay: 400 });
ScrollReveal().reveal(".team3", { delay: 500 });
ScrollReveal().reveal(".team4", { delay: 600 });
ScrollReveal().reveal(".team5", { delay: 700 });
ScrollReveal().reveal(".team6", { delay: 800 });
ScrollReveal().reveal(".team7", { delay: 900 });

//Counter
let valueDisplays = document.querySelectorAll(".number");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

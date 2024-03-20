$(function () {
  $('.slider').slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="../images/arrow-right.svg" alt=""></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="../images/arrow-left.svg" alt=""></button>',
  });
  $('.slider2').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,

    nextArrow:
      '<button class="slick-arrow slick-next"><img src="../images/arrow-right.svg" alt=""></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="../images/arrow-left.svg" alt=""></button>',
  });
});

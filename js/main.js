$(function () {
  $('.slider').slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="../images/arrow-right.svg" alt=""></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="../images/arrow-left.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 441,
        settings: {
          arrows: false,
        },
      },
    ],
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
  $('.burger__menu').on('click', function () {
    $('.menu').addClass('active');
  });
  $('.close-btn').on('click', function () {
    $('.menu').removeClass('active');
  });
});

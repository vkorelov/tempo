$(".certificates__slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".gallery__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  nextArrow:
    '<button class="slick-arrow slick-next"><img src="images/icons/slider-arrow-right.png" alt="next arrow"></button>',
  prevArrow:
    '<button class="slick-arrow slick-prev"><img src="images/icons/slider-arrow-left.png" alt="prev arrow"></button>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        nextArrow:
          '<button class="slick-arrow slick-next"><img src="images/icons/slider-arrow-right--mobile.png" alt="next arrow"></button>',
        prevArrow:
          '<button class="slick-arrow slick-prev"><img src="images/icons/slider-arrow-left--mobile.png" alt="prev arrow"></button>',
      },
    },
  ],
});



if ($(window).width() <= "768") {
  $(".case-page__wrapper .mission__info").slick({
    arrows: false,
    dots: true,
  });
  $(".tasks__inner").slick({
    arrows: false,
    dots: true,
  });
  $(".watch-also__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true
  });
}

$(window).on("resize", function () {
  if ($(window).width() <= "768") {
    $(".case-page__wrapper .mission__info").slick({
      arrows: false,
      dots: true,
    });
    $(".tasks__inner").slick({
      arrows: false,
      dots: true,
    });
    $(".watch-also__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      dots: true
    });
  } else {
    $(".case-page__wrapper .mission__info").slick("unslick");
    $(".tasks__inner").slick("unslick");
    $(".watch-also__slider").slick("unslick");
  }
});

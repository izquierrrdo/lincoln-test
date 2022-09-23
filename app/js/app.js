document.addEventListener("DOMContentLoaded", function () {

  ;(function ($) {

    $('.slick').slick({
      infinite: true,
      arrows: false,
      dots: true,
      customPaging: function (slider, i) {
        return '<div class="slider-dot"></div>';
      },
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]

    });

    $(".nav-menu-btn").click(function () {
      $(".nav-menu").toggleClass("active");
    });

  }(jQuery));

});
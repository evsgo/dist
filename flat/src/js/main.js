(function() {
  'use strict';

  // https://60devs.com/cross-browser-blur-effect.html
  document.documentElement.setAttribute('data-agent', navigator.userAgent);

    // slider slick
  $(document).ready(function(){

    $('.features-slider').slick({
      dots: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            infinite: true
          }
        }
      ]
    });

    var maxWidth = 480,

    slickVar = {
      centerPadding: 0,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      mobileFirst: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: maxWidth,
          settings: 'unslick'
        }
      ]
    },

    runSlick = function() {
      $('.pricing-slider').slick(slickVar);
    }; runSlick();

    // listen to jQuery's window resize
    $(window).on('resize', function(){
      var width = $(window).width();
      if(width < maxWidth) {
        runSlick();
      }
    });

    $('.previews-slider__list').slick({
      dots: true,
      speed: 700,
      autoplay: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            dots: false
          }
        }
      ]
    });
  });


  $(document).ready(function () {
    $('#previewsButton').click(function (event) {
      event.preventDefault();
      if ($(this).attr('data-slider-paused') === '') {
        $(this).attr('data-slider-paused','true');
        $('#previewsFilter').attr('data-slider-filter', 'disabled');
        $('#previewsControls').attr('data-slider-controls', 'actived');
        $('#previewsPaused').attr('data-slider-stop', 'true');
        $('#previewsLeft').attr('data-slider-left', 'true');
        $('#previewsRight').attr('data-slider-right', 'true');
      } else {
        $(this).attr('data-slider-paused','');
        $('#previewsFilter').attr('data-slider-filter', 'actived');
        $('#previewsControls').attr('data-slider-controls', '');
        $('#previewsPaused').attr('data-slider-stop','');
        $('#previewsLeft').attr('data-slider-left','');
        $('#previewsRight').attr('data-slider-right','');
      }
    });
  });


  // Your custom JavaScript goes here
})();
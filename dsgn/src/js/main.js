(function() {
  'use strict';

  // For testing in IE8
  if (!window.console){ console = {log: function() {}}; }

  // Elements to inject
  var mySVGsToInject = document.querySelectorAll('[data-svg]');

  // Options
  var injectorOptions = {
    evalScripts: 'once',
    pngFallback: 'assets/png',
    each: function (svg) {
      // Callback after each SVG is injected
      if (svg) console.log('SVG injected: ' + svg.getAttribute('id'));
    }
  };

  // Trigger the injection
  SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
    // Callback after all SVGs are injected
    console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
  });

  new WOW().init();

  $(document).ready(function() {
    $('[data-menu-trigger]').click(function() {
      $(this).toggleClass('nav-menu--close');

      if ($('.nav-menu__list').css('display') === 'none') {
        $('.nav-menu').attr('data-menu', 'show');
        $('.navbar--fixed').attr('data-menu', 'fixed');
        $('.nav-menu__list').css('display', 'flex');
      } else {
        $('.navbar--fixed, .nav-menu').removeAttr('data-menu');
        $('.nav-menu__list').css('display', 'none');
      }
    });
    $(".nav-menu a").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 800);
      return false;
    });
  });

  (function ($scrollUp, $win) {
    $(document).scroll(function () {
      $scrollUp.toggleClass("invisible", $win.scrollTop() < 300);
    });
    $scrollUp.click(function (event) {
      event.preventDefault();
      $("body, html").animate({
          scrollTop: 0
      }, 500);
    });
  })( $("#scrollUp"), $(window) );


  // $(document).ready(function() {
  //   $('.projects__list').masonry({
  //     // options...
  //     itemSelector: '.projects__item',
  //     columnWidth: 1
  //   });
  // });


  // Your custom JavaScript goes here
})();
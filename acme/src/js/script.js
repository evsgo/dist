(function() {
  'use strict';

  var $ = jQuery.noConflict();

  // Слайдер проектов
  $(function() {
    $('.projects-list').slick({
      prevArrow: $('.nav-arrows__prev'),
      nextArrow: $('.nav-arrows__next'),
      fade: true,
      speed: 700,
      swipe: false,
      swipeToSlide: false
    });
  });

  // поиск
  $(function() {
    $('#searchBtn').click(function(event) {
      event.preventDefault();

      if ($('#mdlSearchInput').attr('data-search') === '') {
        $('#mdlSearchInput, body').attr('data-search', 'active')
        .keyup(function(e) {
          if (e.which === 27 || e.keyCode === 27 ) {
            $('#mdlSearchInput').attr('data-search', '');
          }
        });
      } else {
        $('#mdlSearchInput').attr('data-search', '');
      }
    });
  });

  // Выбор телефона
  $('#feedbackForm').on('click', '.js-select-option', function(event) {
    event.preventDefault();
    $('#selectPhone').text($('.js-option-text', $(this)).data('text'));
  });

})();
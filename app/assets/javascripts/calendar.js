var calendar = (function ($) {
  'use strict';

  var calendar = {
    slider: null,

    // set it all up
    setup: function () {
      calendar.setupSlider();
      calendar.setupToday();
    },

    // setup the slider
    setupSlider: function () {
      calendar.slider = $('.slider').bxSlider({
        mode: 'horizontal',
        minSlides: 1,
        maxSlides: 1,
        slideWidth: $('.month').width(),
        slideMargin: 40,
        startSlide: calendar.isCurrentYear() ? applicationData.today.month - 1 : 0,
        pager: false,
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSliderLoad: function (currentIndex) {
          $('#month-meta .title h3').text(
            $('.month').eq(currentIndex).data('month')
          );
        },
        onSlidePrev: function (slideElement) {
          $('#month-meta .title h3').text($(slideElement).data('month'));
        },
        onSlideNext: function (slideElement) {
          $('#month-meta .title h3').text($(slideElement).data('month'));
        },
        prevText: '<i class="icon-chevron-sign-left"></i>',
        prevSelector: $('#month-meta .prev'),
        nextText: '<i class="icon-chevron-sign-right"></i>',
        nextSelector: $('#month-meta .next'),
        touchEnabled: false
      });
    },

    // setup the today button
    setupToday: function () {
      if (calendar.isCurrentYear()) {
        $('.month [data-doy="' + applicationData.today.doy + '"]').addClass('today');
        $('#day-meta a.today').click(function (event) {
          var slideNumber = applicationData.today.month - 1;
          event.preventDefault();
          calendar.slider.goToSlide(slideNumber);
          $('#month-meta .title h3').text($('.month:eq(' + slideNumber + ')').data('month'));
        });
      }
    },

    // is the calendar for the current year being shown?
    isCurrentYear: function () {
      return applicationData.year === applicationData.today.year;
    }
  };

  return calendar;
})(jQuery);

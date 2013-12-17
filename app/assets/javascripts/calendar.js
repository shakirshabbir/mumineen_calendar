var calendar = (function ($) {
  'use strict';

  var calendar = {
    // set it all up
    setup: function () {
      calendar.setupSlider();
    },

    // set up the slider
    setupSlider: function () {
      $('.slider').bxSlider({
        mode: 'horizontal',
        minSlides: 1,
        maxSlides: 1,
        slideWidth: $('.month').width(),
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
        prevText: '<i class="foundicon-left-arrow"></i>',
        prevSelector: $('#month-meta .prev'),
        nextText: '<i class="foundicon-right-arrow"></i>',
        nextSelector: $('#month-meta .next')
      });
    },

    // is the calendar for the current year being shown?
    isCurrentYear: function () {
      return applicationData.year === applicationData.today.year;
    }
  };

  return calendar;
})(jQuery);

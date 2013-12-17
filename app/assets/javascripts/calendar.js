$(document).ready(function () {
  'use strict';

  $('.slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 1,
    slideWidth: $('.month').width(),
    startSlide: applicationData.year === applicationData.today.year ? applicationData.today.month - 1 : 0,
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
});

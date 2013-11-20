$(document).ready(function () {
  'use strict';

  $(document).foundation();

  $('.slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 1,
    slideWidth: $('.month').width(),
    startSlide: today.month - 1,
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
    prevText: '<i class="fi-arrow-left large"></i>',
    prevSelector: $('#month-meta .prev'),
    nextText: '<i class="fi-arrow-right large"></i>',
    nextSelector: $('#month-meta .next')
  });
});
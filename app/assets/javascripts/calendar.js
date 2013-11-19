$(function(){ $(document).foundation(); });

$(document).ready(function () {
  "use strict";

  $('.slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 1,
    slideWidth: $('.slider .month').width(),
    pager: false,
    infiniteLoop: false,
    hideControlOnEnd: true
  });
});
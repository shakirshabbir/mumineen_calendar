var miqaats = (function ($) {
  'use strict';

  var markers = {
    1: {
      day: 'icon-sun',
      night: 'icon-moon'
    },
    2: {
      day: 'icon-sun',
      night: 'icon-moon'
    },
    3: {
      day: 'icon-circle',
      night: 'icon-circle'
    }
  };

  var miqaats = {
    // set it all up
    setup: function () {
      $('.month .day').not('[data-doy=0]').on('click', function (event) {
        $('#modal').empty();
        $('#modal').html($(event.target).find('.modal-data').html());
        $('#modal').append('<a class="close-reveal-modal">&#215;</a>');
        $('#modal').foundation('reveal', 'open');
      });
    }
  };

  return miqaats;
})(jQuery);

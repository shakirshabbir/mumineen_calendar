var miqaats = (function ($) {
  'use strict';

  var miqaats = {
    // set it all up
    setup: function () {
      $('.month .day').not('[data-doy=0]').on('click', function (event) {
        $('#modal .container').empty();
        $('#modal .container').html($(event.target).find('.modal-data').html());
        $('#modal').foundation('reveal', 'open');
      });
    }
  };

  return miqaats;
})(jQuery);

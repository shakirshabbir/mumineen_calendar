var miqaats = (function ($) {
  'use strict';

  var miqaats = {
    // set it all up
    setup: function () {
      $('.month .day').not('[data-doy=0]').each(function (index, element) {
        $(element).magnificPopup({
          callbacks: {
            beforeOpen: function () {
              $('#modal .container').html($(element).find('.modal-data').html());
            },
            afterClose: function () {
              $('#modal .container').empty();
            }
          },
          items: {
            src: '#modal',
            type: 'inline'
          },
          mainClass: 'mfp-zoom-in',
          midClick: true,
          removalDelay: 500
        });
      });
    }
  };

  return miqaats;
})(jQuery);

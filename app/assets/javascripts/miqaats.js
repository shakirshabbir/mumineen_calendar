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
    data: null,

    // set it all up
    setup: function () {
      $.getJSON('/data/miqaats.json', function (data) {
        miqaats.data = data;
        miqaats.markCalendar();
      });
    },

    // return miqaat data for specified day of year
    onDOY: function (dayOfYear) {
      if (miqaats.data.hasOwnProperty(dayOfYear)) {
        return miqaats.data[dayOfYear];
      }
      return [];
    },

    // add miqaat markers to the calendar
    markCalendar: function () {
      $('.month .day').each(function (index, element) {
        var miqaatList = miqaats.onDOY($(element).data('doy')),
            minimumClass = Infinity,
            period,
            marker;
        if (miqaatList.length > 0) {
          miqaatList.forEach(function (item) {
            if (item.class < minimumClass) {
              minimumClass = item.class;
              period = item.period;
            }
          });
          $(element).find('i').addClass(markers[minimumClass][period]);
        }
      });
    }
  };

  return miqaats;
})(jQuery);

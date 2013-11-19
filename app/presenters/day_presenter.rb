class DayPresenter
  def initialize(hijri_date, gregorian_date, is_filler = false)
    @hijri_date = hijri_date
    @gregorian_date = gregorian_date
    @is_filler = is_filler
  end

  def hijri_day
    arabic_numeral(hijri_date.day)
  end

  def gregorian_day
    date_format_string = "%-d"

    if hijri_date.day == 1 or gregorian_date.mday == 1
      date_format_string += " %b"
    end

    if hijri_date.day == 1 or gregorian_date.yday == 1
      date_format_string += " %Y"
    end

    gregorian_date.strftime(date_format_string)
  end

  def is_filler?
    @is_filler
  end

  private

  attr_reader :hijri_date, :gregorian_date

  def html_codes
    @html_codes ||= [
      '&#1632;', '&#1633;', '&#1634;', '&#1635;', '&#1636;',
      '&#1637;', '&#1638;', '&#1639;', '&#1640;', '&#1641;'
    ]
  end

  def arabic_numeral(x)
    x.to_s.split('').collect { |i| html_codes[i.to_i] } .join
  end
end

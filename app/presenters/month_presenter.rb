class MonthPresenter
  attr_reader :year, :month

  def initialize(year, month)
    @year = year
    @month = month
  end

  def name
    HijriDate::MONTHNAMES_EN[month]
  end

  def each_week &block
    hijri_day = HijriDate::Date.new(year, month, 1)
    gregorian_day = Date.jd(hijri_day.jd)

    weeks = []
    week = previous_month_filler(hijri_day, gregorian_day)
    while hijri_day.month == month do
      week << DayPresenter.new(hijri_day, gregorian_day)

      if gregorian_day.wday == 6
        weeks << week
        week = []
      end

      hijri_day += 1
      gregorian_day += 1
    end
    week += next_month_filler(hijri_day, gregorian_day)
    weeks << week

    weeks.each &block
  end

  def previous_month_filler(hijri_date, gregorian_date)
    week = []
    (0...hijri_date.wday).each do |i|
      offset = hijri_date.wday - i
      week << DayPresenter.new(hijri_date - offset, gregorian_date - offset, true)
    end
    week
  end

  def next_month_filler(hijri_date, gregorian_date)
    week = []
    6.downto(hijri_date.wday).each do |i|
      offset = 6 - i
      week << DayPresenter.new(hijri_date + offset, gregorian_date + offset, true)
    end
    week
  end
end

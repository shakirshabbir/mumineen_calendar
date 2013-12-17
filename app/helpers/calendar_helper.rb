module CalendarHelper
  def prev_year(year)
    year > CalendarPresenter::MIN_YEAR ? year - 1 : CalendarPresenter::MIN_YEAR 
  end

  def next_year(year)
    year < CalendarPresenter::MAX_YEAR ? year + 1 : CalendarPresenter::MAX_YEAR
  end

  def js_variables(year, today)
    {
      year: year,
      today: {
        day: today.day,
        month: today.month,
        year: today.year,
        doy: today.day_of_year
      }
    }.to_json
  end
end

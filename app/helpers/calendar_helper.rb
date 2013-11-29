module CalendarHelper
  def prev_year(year)
    year > CalendarController::MIN_YEAR ? year - 1 : CalendarController::MIN_YEAR 
  end

  def next_year(year)
    year < CalendarController::MAX_YEAR ? year + 1 : CalendarController::MAX_YEAR
  end
end

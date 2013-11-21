class CalendarController < ApplicationController
  MIN_YEAR = 1000
  MAX_YEAR = 3000

  def index
    @today = HijriDate.jd(Date.today.jd)

    if params['year'] and params['year'].to_i >= MIN_YEAR and params['year'].to_i <= MAX_YEAR
      @year = params['year'].to_i
    else
      @year = @today.year
    end

    @calendar = CalendarPresenter.new(@year)
  end
end

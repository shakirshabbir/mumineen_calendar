class CalendarController < ApplicationController
  def index
    @today = HijriDate.jd(Date.today.jd)
    @year = params['year'] ? params['year'].to_i : @today.year
    @calendar = CalendarPresenter.new(@year)
  end
end

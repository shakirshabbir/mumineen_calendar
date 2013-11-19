class CalendarController < ApplicationController
  def index
    today = HijriDate.jd(Date.today.jd)
    @year = today.year
    @calendar = CalendarPresenter.new(@year)
  end
end

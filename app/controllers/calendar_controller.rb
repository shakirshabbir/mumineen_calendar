class CalendarController < ApplicationController
  def index
    @today = HijriDate.jd(Date.today.jd)
    @calendar = CalendarPresenter.new(@today.year)
  end
end

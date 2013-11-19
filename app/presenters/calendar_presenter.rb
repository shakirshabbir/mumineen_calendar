class CalendarPresenter
  attr_reader :year

  def initialize(year)
    @year = year
  end

  def each_month &block
    months = (1..12).collect { |month| MonthPresenter.new(year, month) }
    months.each &block
  end
end

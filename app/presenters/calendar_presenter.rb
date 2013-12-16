class CalendarPresenter
  MIN_YEAR = 1000
  MAX_YEAR = 3000

  attr_reader :year

  def initialize(year)
    if year >= MIN_YEAR and year <= MAX_YEAR
      @year = year
    else
      @year = nil
    end
  end

  def each_month &block
    if valid?
      months = (1..12).collect { |month| MonthPresenter.new(year, month) }
      months.each &block
    end
  end

  def valid?
    not year.nil?
  end
end

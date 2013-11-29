require 'spec_helper'

describe CalendarHelper do
  describe "the previous year" do
    it "should be one less than the specified year" do
      prev_year(1434).should == 1433
    end

    it "should be the minimum year if the specified year is the minimum year" do
      prev_year(CalendarController::MIN_YEAR).should == CalendarController::MIN_YEAR
    end
  end

  describe "the next year" do
    it "should be one more than the specified year" do
      next_year(1434).should == 1435
    end

    it "should be the maximum year if the specified year is the maximum year" do
      next_year(CalendarController::MAX_YEAR).should == CalendarController::MAX_YEAR
    end
  end
end

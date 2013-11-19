require 'spec_helper'

describe CalendarPresenter do
  let(:calendar) { CalendarPresenter.new(1434) }

  describe "#each_month" do
    it "contains twelve months in the year" do
      calendar.each_month.to_a.length.should == 12
    end
  end
end
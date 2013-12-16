require 'spec_helper'

describe CalendarPresenter do
  describe "calendar year" do
    context "is between minimum and maximum years (inclusive)" do
      let(:calendar) { CalendarPresenter.new(1434) }

      it "is valid" do
        expect(calendar.valid?).to be_true
      end

      it "returns twelve months for the #each_month method" do
        expect(calendar.each_month.to_a.length).to eq(12)
      end
    end

    context "is not between minimum and maximum years (inclusive)" do
      let(:calendar) { CalendarPresenter.new(999) }

      it "is invalid" do
        expect(calendar.valid?).to be_false
      end

      it "returns a nil for the #each_month method" do
        expect(calendar.each_month).to be_nil
      end
    end
  end
end

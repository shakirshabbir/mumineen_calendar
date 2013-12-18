require 'csv'
require 'hijri_date'
require 'json'

namespace :miqaat do
  desc "Convert CSV file containing miqaat data into a compressed JSON file."
  task csv_to_json: :environment do
    options = {
      :quote_char => '"',
      :col_sep => ',',
      :headers => true,
      :header_converters => :symbol
    }
    year = 1434
    
    data = {}
    CSV.foreach('lib/assets/csv/miqaats.csv', options) do |row|
      date = HijriDate::Date.new(year, row[:month].to_i, row[:date].to_i)
      day_of_year = date.day_of_year.to_s
      miqaat_data = miqaat_hash(row)

      if data.has_key?(day_of_year)
        data[day_of_year] += [miqaat_data]
      else
        data[day_of_year] = [miqaat_data]
      end
    end

    File.open('lib/assets/json/miqaats.json', 'w') do |file|
      file.write(data.to_json)
    end
  end

  def miqaat_hash(data)
    {
      title: data[:title],
      description: data[:description],
      class: data[:class].to_i,
      period: data[:period]
    }
  end      
end

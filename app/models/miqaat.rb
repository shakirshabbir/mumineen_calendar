require 'csv'

class Miqaat < ActiveFile::Base
  set_root_path "#{Rails.root}/lib/assets"
  set_filename "miqaats"

  class << self
    def extension
      'csv'
    end

    def load_file
      csv_options = {
        :quote_char => '"',
        :col_sep => ',',
        :headers => true,
        :header_converters => :symbol
      }
      year = 1434

      id = 0
      data = []
      CSV.foreach(full_path, csv_options) do |row|
        data << miqaat_hash(id, row)
        id += 1
      end
      data
    end
  end

  def self.miqaat_hash(id, data)
    {
      id: id,
      date: data[:date].to_i,
      month: data[:month].to_i,
      title: data[:title],
      description: data[:description],
      priority: data[:priority].to_i,
      phase: data[:phase]
    }
  end

  def self.all_for_date(date)
    self.find_all_by_month_and_date(date.month, date.day).sort_by { |miqaat| miqaat.priority }
  end
end

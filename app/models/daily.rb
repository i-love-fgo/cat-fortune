class Daily < ApplicationRecord
  belongs_to :user

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :year
  belongs_to_active_hash :month
  belongs_to_active_hash :day
  with_options numericality: { other_than: 1} do
    validates :year_id
    validates :month_id
    validates :day_id
  end
end
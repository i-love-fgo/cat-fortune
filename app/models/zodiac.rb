class Zodiac < ApplicationRecord
  belongs_to :user

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :sign_id
  with_options numericality: { other_than: 1} do
    validates :sign_id
  end
end
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  with_options presence: true do
    validates :nickname
    validates :favorite_cat
  end
  has_many :dailies
  has_many :bloodtypes
  has_many :zodiacs

  mount_uploader :image, ImageUploader

end

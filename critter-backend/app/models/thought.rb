class Thought < ApplicationRecord
  belongs_to :user

  has_many :likes
  # has_many :users, through: :likes

  has_many :replies
  has_many :users, through: :replies
end

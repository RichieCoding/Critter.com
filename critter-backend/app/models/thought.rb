class Thought < ApplicationRecord
  belongs_to :author, :class_name => "User"

  has_many :likes
  # has_many :users, through: :likes

  has_many :replies
  # has_many :users, through: :replies
end

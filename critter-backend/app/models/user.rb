class User < ApplicationRecord
  has_many :thoughts

  has_many :replies

  # has_many :likes
  # has_many :thoughts, through: :likes
end

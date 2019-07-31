class ThoughtSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :created_at

  has_many :replies

  
end

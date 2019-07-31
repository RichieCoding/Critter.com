class ThoughtSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :created_at, :user_name, :image

  has_many :replies

  def user_name
    user_name = self.object
    user_name.user.name
  end

  def image
    user_image = self.object
    user_image.user.image
  end
end

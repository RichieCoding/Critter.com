class ReplySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :created_at, :user_name, :user_image

  belongs_to :thought

  def user_name
    user_name = self.object
    user_name.user.name
  end

  def user_image
    user_image = self.object
    user_image.user.image 
  end

end

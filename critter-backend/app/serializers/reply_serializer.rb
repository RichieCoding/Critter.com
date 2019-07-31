class ReplySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :created_at, :user_name

  belongs_to :thought

  def user_name
    user_name = self.object
    user_name.user.name
  end

end

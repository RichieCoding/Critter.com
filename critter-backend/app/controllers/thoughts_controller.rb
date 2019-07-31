class ThoughtsController < ApplicationController

  def index
    thoughts = Thought.all.order(created_at: :desc)
    render json: thoughts, include: [:replies, :user]
  end

end

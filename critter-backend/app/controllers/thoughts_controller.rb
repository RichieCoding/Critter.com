class ThoughtsController < ApplicationController

  def index
    thoughts = Thought.all 
    render json: thoughts, include: [:replies, :user]
  end

end

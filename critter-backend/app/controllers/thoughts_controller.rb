class ThoughtsController < ApplicationController

  def index
    thoughts = Thought.all.order(created_at: :desc)
    render json: thoughts, include: [:replies, :user]
  end

  def new
    thought = Thought.new
  end

  def create
    thought = Thought.create(thought_params)
    render json: thought, include: [:user]
  end

  private 

  def thought_params
    params.require(:thought).permit(:user_id, :content)
  end

end

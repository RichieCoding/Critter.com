class ThoughtsController < ApplicationController

  def index
    thoughts = Thought.all.order(created_at: :desc)
    render json: thoughts, include: [:replies, :user]
  end

  def new
    thought = Thought.new
    render json: thought, include: [:user]
  end

  def create
    thought = Thought.create(params)
    render json: thought, include: [:user]
  end

end

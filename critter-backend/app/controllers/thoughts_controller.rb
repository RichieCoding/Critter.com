class ThoughtsController < ApplicationController

  def index
    thoughts = Thought.all.order(created_at: :desc)
    render json: thoughts, include: [:replies, :user]
  end

  def show
    thought = Thought.find(params{:id})
  end

  def new
    thought = Thought.new
  end

  def create
    thought = Thought.create(thought_params)
    render json: thought, include: [:user]
  end

  def destroy
    thought = Thought.find(params[:id])
    thought.destroy 
  end




  private 

  def thought_params
    params.require(:thought).permit(:user_id, :content)
  end



  
end

class RepliesController < ApplicationController

  def index
    replies = Reply.all
    render json: replies, include: [:user]
  end

  def show
    reply = Reply.find(params[:id])
    user = reply.user 
    render json: reply, include: [:user]
  end
  
  def new
    reply = Reply.new
  end

  def create
    reply = Reply.create(reply_params)
    render json: reply, include: [:user]
  end

  private

  def reply_params
    params.require(:reply).permit(:user_id, :content)
  end

end

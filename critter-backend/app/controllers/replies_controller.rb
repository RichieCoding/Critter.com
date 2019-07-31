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

end

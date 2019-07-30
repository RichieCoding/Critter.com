class RepliesController < ApplicationController

  def index
  end

  def show
    reply = Reply.find(params[:id])
    user = reply.user 
    render json: reply, include: [:user]
  end

end

class UsersController < ApplicationController

  def index 
    users = User.all 
    render json: users, include: [:thoughts]
  end

  def show 
    user = User.find(params[:id])
    render json: user, include: [:thoughts, :replies]
  end
  

end

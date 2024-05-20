# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :authenticate_user!

  def current
    render json: current_user
  end
end

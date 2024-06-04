module Api
  class CurrentUserController < ApplicationController
    before_action :authenticate_user!

    def index
      if current_user
        render json: UserSerializer.new(current_user).serializable_hash[:data][:attributes], status: :ok
      else
        render json: { error: "User not logged in" }, status: :unauthorized
      end
    end
  end
end

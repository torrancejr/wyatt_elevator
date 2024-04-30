class SearchesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @search = Search.new(search_params)
    if @search.save
      render json: @search, status: :created
    else
      render json: @search.errors, status: :unprocessable_entity
    end
  end

  private

  def search_params
    params.require(:search).permit(:location)
  end

end

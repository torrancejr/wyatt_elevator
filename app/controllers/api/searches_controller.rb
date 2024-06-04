module Api
  class SearchesController < ApplicationController
    def index
      searches = Search.all
      render json: searches
    end

    def create
      search = Search.new(search_params)
      if search.save
        render json: search, status: :created
      else
        render json: search.errors, status: :unprocessable_entity
      end
    end

    private

    def search_params
      params.require(:search).permit(:location, :latitude, :longitude)
    end
  end
end

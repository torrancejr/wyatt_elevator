module Api
  class InquiriesController < ApplicationController
    def index
      inquiries = Inquiry.all
      render json: inquiries
    end

    def create
      inquiry = Inquiry.new(inquiry_params)
      if inquiry.save
        render json: inquiry, status: :created
      else
        render json: inquiry.errors, status: :unprocessable_entity
      end
    end

    private

    def inquiry_params
      params.require(:inquiry).permit(:first_name, :last_name, :location, :interest, :message, :phone_number)
    end
  end
end
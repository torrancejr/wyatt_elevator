class InquiriesController < ApplicationController
  skip_before_action :verify_authenticity_token

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
    params.require(:inquiry).permit(:first_name, :last_name, :location, :phone_number, :interest, :message)
  end
end

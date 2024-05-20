module Users
  class RegistrationsController < Devise::RegistrationsController
  respond_to :json
  include RackSessionFix

  private

  # def respond_with(resource, _opts = {})
  #   resource.persisted? ? register_success : register_failed
  # end

  def respond_with(resource, _opts = {})
    if request.method == "POST" && resource.persisted?
      render json: {
        status: {code: 200, message: "Signed up sucessfully."},
        data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
      }, status: :ok
    elsif request.method == "DELETE"
      render json: {
        status: { code: 200, message: "Account deleted successfully."}
      }, status: :ok
    else
      render json: {
        status: {code: 422, message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end

  def register_success
    render json: { message: 'Signed up sucessfully.' }, status: :ok
  end

  def register_failed
    render json: { message: "Something went wrong." }, status: :unprocessable_entity
  end
  end
  end
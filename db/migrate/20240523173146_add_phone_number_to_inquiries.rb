class AddPhoneNumberToInquiries < ActiveRecord::Migration[7.1]
  def change
    add_column :inquiries, :phone_number, :string
  end
end

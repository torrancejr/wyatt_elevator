class CreateInquiries < ActiveRecord::Migration[7.1]
  def change
    create_table :inquiries do |t|
      t.string :first_name
      t.string :last_name
      t.string :location
      t.string :interest
      t.text :message

      t.timestamps
    end
  end
end

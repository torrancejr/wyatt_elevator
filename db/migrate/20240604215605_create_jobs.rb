class CreateJobs < ActiveRecord::Migration[7.1]
  def change
    create_table :jobs do |t|
      t.boolean :e, null: false, default: false
      t.string :consolidated
      t.date :start_date
      t.integer :job, limit: 3
      t.string :tax, limit: 1
      t.integer :type, limit: 1
      t.string :job_name
      t.string :address
      t.string :city
      t.string :state
      t.string :zone, limit: 1
      t.string :zip
      t.string :type_str
      t.string :mech
      t.integer :units, limit: 1
      t.string :visits

      t.timestamps
    end
  end
end

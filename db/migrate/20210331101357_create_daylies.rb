class CreateDaylies < ActiveRecord::Migration[6.0]
  def change
    create_table :dailies do |t|
      t.integer :year_id,        null: false
      t.integer :month_id,       null: false
      t.integer :day_id,         null: false
      t.timestamps
    end
  end
end

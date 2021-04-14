class CreateBloodtypes < ActiveRecord::Migration[6.0]
  def change
    create_table :bloodtypes do |t|
      t.integer :type_id,      null: false
      t.timestamps
    end
  end
end
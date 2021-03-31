class CreateZodiacs < ActiveRecord::Migration[6.0]
  def change
    create_table :zodiacs do |t|
      t.integer :sign_id, null:false
      t.timestamps
    end
  end
end

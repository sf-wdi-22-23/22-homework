class CreateCreatures < ActiveRecord::Migration
  def change
    create_table :creatures do |t|
      t.string :name
      t.string :descrition

      t.timestamps null: false
    end
  end
end

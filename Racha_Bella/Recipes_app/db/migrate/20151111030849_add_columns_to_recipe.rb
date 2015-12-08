class AddColumnsToRecipe < ActiveRecord::Migration
  def change
  	add_column :recipes,  :name, :string
  	add_column :recipes,  :instructions, :string
  end
end

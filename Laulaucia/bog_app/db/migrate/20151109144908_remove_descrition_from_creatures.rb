class RemoveDescritionFromCreatures < ActiveRecord::Migration
  def change
    remove_column :creatures, :descrition, :string
  end
end

class Recipe < ActiveRecord::Base
	belongs_to :user

	validates :name, :instructions,
	presence: true, length: { maximum: 255}
end

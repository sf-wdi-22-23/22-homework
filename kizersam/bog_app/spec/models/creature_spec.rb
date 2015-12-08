require 'rails_helper'

RSpec.describe Creature, type: :model do
  	before do
		creature_params = Hash.new
		creature_params[:name] = "zombie"
		creature_params[:description] = "scary as f$%@"
		@creature = Creature.create(creature_params)
	end
		

end

require 'rails_helper'

RSpec.describe CreaturesController, type: :controller do
	before do
		creature_params = Hash.new
		creature_params[:name] = "zombie"
		creature_params[:description] = "scary as f$%@"
		@creature = Creature.create(creature_params)
	end

	describe "#new" do
		it "returns a new creature object" do
			expect(@creature).to be_an_instance_of Creature
		end

		it "knows it has a name" do
			expect(@creature.name).to eq("zombie")
		end

		it "knows it has a description" do
			expect(@creature.description).to eq("scary as f$%@")
		end

	end

end

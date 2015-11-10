class CreaturesController < ApplicationController

	def index
		@creatures = Creature.all
	end

	def new
		@creature = Creature.new
	end
	
	def create 
		creature_params = params.require('creature'.permit(:name, :description))

		creature = Creature.new(creature_params)
		if creature.save
			redirect_to creature
		end
	end

	def show
		id= params[:id]
		@creature = Creature.find(id)
	end

	def edit
		id=params[:id]
		@creature = Creature.find(id)
	end

	def update
		id = params[:id]
		creature = Creature.find(id)

		updated_attributes = params.require(:creature).permit(:name, :description)
		creature.update_attributes(updated_attributes)
		redirect_to creature
	end

	def destroy
		id = params[:id]
		creature = Creature.find(id)
		creature.destroy
		redirect_to creatures_path
	end
end
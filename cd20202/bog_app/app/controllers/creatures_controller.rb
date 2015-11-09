class CreaturesController < ApplicationController

	def index
		@creatures = Creature.all
		render 'index'
	end

	def new
		@creature = Creature.new
		render :new
	end

	def create
		creature_params = params.require(:creature).permit(:name, :description)
		creature = Creature.create(creature_params)
		if creature.save
			redirect_to creature
		end
	end

	def show
		id = params[:id]
		@creature = Creature.find(id)
		render :show
	end

	def edit
		id = params[:id]
		@creature = Creature.find(id)
		render :edit
	end

	def update
		id = params[:id]
		creature = Creature.find(id)
		updated_info = params.require(:creature).permit(:name, :description)
		creature.update_attributes(updated_info)
		redirect_to creature
	end

	def delete
		id = params[:id]
		creature = Creature.find(id)
		creature.destroy
		redirect_to creatures_path
	end

end

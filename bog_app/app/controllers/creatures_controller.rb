class CreaturesController < ApplicationController
	# show all the creatures
	def index
		@creatures = Creature.all
		render :index
	end
	def new
		@creature = Creature.new
		render :new
	end
	def create
		creature_params = params.require(:creature).permit(:name, :desciption)
		# create a new creature with those parameters
		creature = Creature.new(creature_params)
		# check it was saved
		if creature.save
			redirect_to creature
		end
	end
	def show
		id = params[:id]
		@creature = Creature.find(id)
		render :show
	end
end

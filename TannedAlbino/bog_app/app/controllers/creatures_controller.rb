class CreaturesController < ApplicationController
	def index
# get all creatures from db and save to instance variable
		@creatures = Creature.all
		render :index
	end

	# show the new creature form
	def new
		@creature = Creature.new
		render :new
	end

	# create a new creature in the database
	def create
		# validate params and save them as a variable
		creature_params = params.require(:creature).permit(:name, :description)
		# create a new creature with those params
		creature = Creature.new(creature_params)
		# check that it saved
		if creature.save
			# if saved, redirect to route that shows all creatures note: following is same as redirect_to "/creatures"
			redirect_to creature
		end
	end

	def show
		# get the id parameter from the url
		id = params[:id]
		# find the creature with that id and save to an instance variable
		@creature = Creature.find(id)
		# render the show page - it will have access to the @creature variable
		render :show
	end

	def edit
		# save the id parameter to a variable
		id = params[:id]
		# look up the creature by id and save to an instance variable
		@creature = Creature.find(id)
		# render the edit form view -- it will have access to the @creature instance variable
		render :edit
	end

	def update
		# save the id paramater from the url
		creature_id = params[:id]
		# find the creature to update by id
		creature = Creature.find(creature_id)
		# get updated creature data from params
		updated_attributes = params.require(:creature).permit(:name, :description)
		# update the creature
		creature.update_attributes(updated_attributes)

		# redirect to a single creature show page for this creature
		redirect_to creature
	end

	def destroy
		id = params[:id]
		creature = Creature.find(id)
		creature.destroy
		redirect_to creatures_path
		
	end

end

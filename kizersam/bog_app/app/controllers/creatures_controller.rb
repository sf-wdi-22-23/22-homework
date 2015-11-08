class CreaturesController < ApplicationController

	def index 
		@creatures = Creature.all
		render :index
	end

	def new
		@creature=Creature.new
		render :new
	end

	def create
		  # validate params and save them as a variable
        creature_params = params.require(:creature).permit(:name, :description)
        # create a new creature with those params
        creature = Creature.new(creature_params)
        # check that it saved
        if creature.save
            # if saved, redirect to route that shows all creatures
            redirect_to creature
             # ^ same as redirect_to creature_path(creature)
            # ^ same as redirect_to "/creatures/#{creature.id}"
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
        # save the id paramater from the url
        creature_id = params[:id]
        # find the creature to update by id
        creature = Creature.find(creature_id)

        # get updated creature data from params
        updated_attributes = params.require(:creature).permit(:name, :description)
        # update the creature
        creature.update_attributes(updated_attributes)

        # redirect to single creature show page for this creature
        redirect_to creature
        # ^ same as redirect_to creature_path(creature)
        # ^ same as redirect_to "/creatures/#{creature.id}"
    end

     def destroy
        # save the id parameter
        id = params[:id]
        # find the creature to delete by id
        creature = Creature.find(id)
        # destroy the creature
        creature.destroy
        # redirect to creatures index
        redirect_to creatures_path
        # ^ same as redirect_to "/creatures"
    end

end

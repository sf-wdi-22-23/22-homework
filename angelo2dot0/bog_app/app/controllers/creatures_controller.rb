class CreaturesController < ApplicationController
	def index
		@creatures = Creature.all
		render :index
		# get all creatures from db and save to instance variable
		# render index view file (it will have access to instance variables)
	end

    def new
    	@creature = Creature.new
        render :new   # optional; this is the default behavior
        # show the new creature form
    end

    # create a new creature in the database
    def create
        # validate params and save them as a variable
        creature_params = params.require(:creature).permit(:name, :description)
        # create a new creature with those params
        creature = Creature.new(creature_params)
        # check that it saved
        if creature.save
            # if saved, redirect to route that shows just this creature
            redirect_to creature
            # ^ same as redirect_to creature_path(creature)
            # ^ same as redirect_to "/creatures/#{creature.id}"
        end
    end

    # show a single creature
    def show
        # get the id parameter from the url
        id = params[:id]
        # find the creature with that id and save to an instance variable
        @creature = Creature.find(id)
        # render the show page -- it will have access to the @creature variable
        render :show
    end

    # show an edit form for a specific creature
    def edit
        # save the id parameter to a variable
        id = params[:id]
        # look up the creature by id and save to an instance variable
        @creature = Creature.find(id)
        # render the edit form view -- it will have access to the @creature instance variable
        render :edit
    end

    # update a creature in the database
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

    # delete a specific creature by id
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


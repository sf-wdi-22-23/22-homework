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
end


class CreaturesController < ApplicationController
    # show all creatures
    def index
        # get all creatures from db and save to instance variable
        @creatures = Creature.all  
        # render index view file (it will have access to instance variables)
        render :index
    end

    def new
        @creature = Creature.new
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
            redirect_to creatures_path
            # ^ same as redirect_to "/creatures"
        end
    end

    def show
        # get the id parameter from the url
        id = params[:id]
        # find the creature with that id and save to an instance variable
        @creature = Creature.find(id)
        # render the show page -- it will have access to the @creature variable
        render :show
    end


end
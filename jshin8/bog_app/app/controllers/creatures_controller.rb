class CreaturesController < ApplicationController

	def index
		# get all creatures from db and save to instance variable
        @creatures = Creature.all  
        # render index view file (it will have access to instance variables)
        render :index
    end

    def new
    	render :new		# optional, this is the default behavior
	end
end

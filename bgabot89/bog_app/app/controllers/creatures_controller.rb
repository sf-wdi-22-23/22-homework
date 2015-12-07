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
        render :new   # optional; this is the default behavior
    end
# create a new creature in the database
    def create 
    	# validate params and save them as a variable
    	creature_params = params.require(:creature).permit(:name, :description)
    	# create a new creature with those params
    	creature = Creature.new(creature_params)
    	#check if saved
    	if creature.save
    		#if saved, redirect to route that shows all creatures
    		redirect_to creature
    		# ^ same as redirect_to "/creatures"
    	end
    end

    #show creature
    def show
    	#get the id param from the url
    	id = params[:id]
    	#finds the creature with the id and save to an instance variable
    	@creature = Creature.find(id)
    	#render the show - it will have access to the @creature variable
    	render :show
    end

     # keep your other methods, and add:
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
    #delete a specific creature by id 
    def destroy
    	id = params[:id]
    	#find the creatuer by id
    	creature = Creature.find(id)
    	#destroy creature
    	creature.destroy
    	#redirect back to index
    	redirect_to creatures_path
    end

end
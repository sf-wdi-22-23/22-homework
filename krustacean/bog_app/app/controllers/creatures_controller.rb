class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
    render :index
  end
  def new
  end
  def create
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
end

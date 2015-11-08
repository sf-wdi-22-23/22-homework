class CreaturesController < ApplicationController
	def index
# get all creatures from db and save to instance variable
		@creatures = Creature.all
		render :index
	end

end

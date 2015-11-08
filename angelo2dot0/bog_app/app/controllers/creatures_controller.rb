class CreaturesController < ApplicationController
	def index
		@creatures = Creature.all
		render :index
		# get all creatures from db and save to instance variable
		# render index view file (it will have access to instance variables)
	end
end

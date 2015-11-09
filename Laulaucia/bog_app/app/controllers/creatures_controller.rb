class CreaturesController < ApplicationController
	#show all creatures
	def index
		@creatures = Creature.all
		render :index
	end
end

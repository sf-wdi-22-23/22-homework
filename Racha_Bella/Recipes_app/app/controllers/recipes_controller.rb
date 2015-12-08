class RecipesController < ApplicationController
	def new
		@recipe = Recipe.new
		
		render :new
	end

	def create
	end
end

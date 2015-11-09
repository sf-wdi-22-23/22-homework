class CreaturesController < ApplicationController
	protect_from_forgery
	def index 
		@bikes = Creature.all
		render :index
	end

	def show
		@bike = Creature.find(params[:id])
		render :show
	end

	def new
		@bike = Creature.new
		render :new
		
		
	end

	def create
		@bike = Creature.new(params.require(:creature).permit(:name, :image , :property))
		if @bike.save
			redirect_to "/creatures/#{@bike.id}"
		end
	end

	def edit
		id = params[:id]
		@bike = Creature.find(id)

	end

	def update
		id = params[:id]
		bike = Creature.find(id)
		bike = Creature.update_attributes(params.require(:creature).permit(:name, :image , :property))
		redirect_to "/creatures/#{@bike.id}"
	end

	def destroy
		id = params[:id]
		bike = Creature.find(id).destroy
		redirect_to creatures_path


	end

end



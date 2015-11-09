class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
    render :index
  end
  def new
    @creature = Creature.new
    render :new
  end
  def create
    creature_params = params.require(:creature).permit(:name, :description)
    creature = Creature.new(creature_params)
    if creature.save
      redirect_to creature
    end
  end
  def show
    id = params[:id]
    @creature = Creature.find(id)
    render :show
  end
end

Zombie.find(1) #finds zombie with id 1
Zombie.create #creates and saves new zombie
Zombie.last #finds last zombie 
Zombie.order(:name) #sorts zombies alphabetically by name
z = Zombie.find(3)
z.graveyard = "Benny Hills Memorial"
z.save #finds zombie 3, saves to variable z, updates graveyard, saves
Zombie.destroy(3) #destroys zombie with id 3

class Zombie < ActiveRecord::Base #defines zombie class
  validates_presence_of :name #makes sure zombie has :name
  validates_uniqueness_of :name #makes sure each name is diff
  validates :name, presence: true, uniqueness: true #does above code in 1 line
end

class Weapon < ActiveRecord::Base
	belongs_to :zombie #a weapon belongs to a zombie
end

z = Zombie.find(1)
z.weapons #finds zombie 1, calls weapons method to see their weapons

<%= zombie.name %>
<%= zombie.graveyard %> #prints out name and graveyard

<%= link_to zombie.name, zombie %> #link to zombies show page, using zombie as anchor text

<%Zombie.all.each do |zombie|%>
	<%=zombie.name%> #prints out all the zombies names
	<% if zombie.tweets.count > 1 %>
    SMART ZOMBIE
    <%end%>#prints out smart zombie if tweets count >1
<%end%> 

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul> #zomie names link to edit zombie

class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id]) #show method defines instance variable @zombie. Finds zombie by id
     respond_to do |format|
		format.xml { render xml: @zombie } #respond_to returns the xml of the @zombie record
    end
  end
end

class ZombiesController < ApplicationController
  def create
    @zombie = Zombie.create(zombie_params) #creates a new zombie from zombie_params
    redirect_to zombie_path(@zombie) #redirects to show zombie page
  end

  private

  def zombie_params
    params.require(:zombie).permit(:name, :graveyard)
  end 


class ZombiesController < ApplicationController
  before_action :find_zombie
  before_action :check_tweets, only: :show #on show, redirect to zombies_path after doing check_tweets

  def show
    render action: :show
  end

  def find_zombie
    @zombie = Zombie.find params[:id]
  end
  
  def check_tweets
    if @zombie.tweets.size == 0 #if zombie has 0 tweets
      redirect_to zombies_path #redirect
    end
  end
  
end

#in config/routes.rb

TwitterForZombies::Application.routes.draw do
  resources :zombies #adds a resources route for zombies
  root to: "zombies#index" #root goes to zombie controller index action
  get 'undead' => 'zombies#undead' #custom route so /undead will go to undead action on ZombieController
  get '/undead', to: redirect('/zombies') #/undead redirect sto /zombies
  get '/zombies/:name', to: 'zombies#index', as: '/graveyard' #creates a /zombies/:name route that leads to zombie controller index action and names the route /graveyard
end


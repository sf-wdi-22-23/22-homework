#########crud##########
Zombie.find(1)
Zombie.create()
Zombie.last
Zombie.order(:name)
Zombie.find(3).update(graveyard:'Benny Hills Memorial')
Zombie.destroy(3)
#####################

######Models#######
class Zombie < ActiveRecord::Base

end
class Zombie < ActiveRecord::Base
  validates_presence_of :name
end
class Zombie < ActiveRecord::Base
  validates_uniqueness_of :name
end
class Zombie < ActiveRecord::Base
  validates :name,
            presence: true,
            uniqueness: true
end
class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

Zombie.find(1).weapons
#####################

########Views#########
####1
<h1><%= zombie.name %></h1>
<p>
<%= zombie.graveyard%>
</p>
####2
<p>
<%= link_to zombie.name, zombie %>
</p>
####3
<ul>
<% zombies.each do |zombie| %>
  <li><%= zombie.name %></li>
  <% end%>
</ul>
###4
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      <%if zombie.tweets.count > 1%>
      <em>SMART ZOMBIE</em>
      <%end%>
    </li>
  <% end %>
</ul>
###5
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>
#####################

#Controllers
###1
class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])
  end
end
###2
class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])

    respond_to do |format|
      format.xml { render xml: @zombie }

    end
  end
end
###3
def create
   @zombie = Zombie.create(zombie_params)
   redirect_to zombie_path(@zombie)

 end
###4
class ZombiesController < ApplicationController
  before_action :find_zombie
  before_action :check_tweets, only: :show

  def show
    render action: :show
  end

  def find_zombie
    @zombie = Zombie.find params[:id]
  end

  def check_tweets
    if @zombie.tweets.size == 0
      redirect_to zombies_path
    end
  end

#################

#Routes
#1
TwitterForZombies::Application.routes.draw do
  resources :zombies
end
#2
TwitterForZombies::Application.routes.draw do
  get '/undead' => 'zombies#undead'
end
#3
TwitterForZombies::Application.routes.draw do
  get '/undead' => redirect('/zombies')

end
#4
TwitterForZombies::Application.routes.draw do
  root "zombies#index"

end
#5
TwitterForZombies::Application.routes.draw do
  get '/zombies/:name', to: 'zombies#index', :as =>'graveyard'
end

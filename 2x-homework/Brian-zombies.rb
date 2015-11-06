#Challenge 1

Zombie.find(1)

$ Zombie.create({name:'Brian', graveyard: 'Zombieland grave'})

Zombie.last

Zombie.order(:name)

$ Zombie.find(3).update(graveyard:'Benny Hills Memorial')

Zombie.destroy(3)

#Challenge 2

class Zombie < ActiveRecord::Base
  
end

class Zombie < ActiveRecord::Base
  # insert validation here
  validates_presence_of :name
end

class Zombie < ActiveRecord::Base
  # insert validation here
  validates_uniqueness_of :name
end

class Zombie < ActiveRecord::Base
  # insert validation here
  validates_uniqueness_of :name
  validates_presence_of :name
end

class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

$ z=Zombie.find(1)
#<Zombie id: 1, name: "Ashley", graveyard: "Glen Haven Memorial Cemetery">
$ z.weapons
#<ActiveRecord::Associations::CollectionProxy [#<Weapon id: 1, name: "Hammer", strength: 1, zombie_id: 1>]>
Successfully found all of Ashleys weapons.


#Challenge 3

<h1><%= zombie.name %></h1>


<p>
  <%= zombie.graveyard %>
</p>

<p>
<%= link_to zombie.name, zombie %>
</p>

<ul>
  <% zombies.each do |zombie| %>
  <li> <%=  zombie.name %> </li>
  <% end %>
  
</ul>

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      <% if zombie.tweets.count > 1 %>
       SMART ZOMBIE
      <% end %>
    </li>
  <% end %>
</ul>

#each zombie will link to their edit page
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>


#Challenge 4
class ZombiesController < ApplicationController
  def show
    # put the show code here
    @zombie = Zombie.find(params[:id])
  end
end

class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])

    respond_to do |format|
      format.xml {render xml: @zombie}

    end
  end
end

class ZombiesController < ApplicationController
  def create
    @zombie = Zombie.create(zombie_params)
    redirect_to zombie_path(@zombie)
  end

  private

  def zombie_params
    params.require(:zombie).permit(:name, :graveyard)
  end
end


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
end

#Challenge 5

TwitterForZombies::Application.routes.draw do
  
  resources :zombies
end


TwitterForZombies::Application.routes.draw do

  get '/undead' => 'zombies#undead'
end

TwitterForZombies::Application.routes.draw do
	get '/undead' => redirect('/zombies')
end

TwitterForZombies::Application.routes.draw do

  root to: "zombies#index"
end

TwitterForZombies::Application.routes.draw do
  get '/zombies/:name', to: 'zombies#index', as: 'graveyard'
end



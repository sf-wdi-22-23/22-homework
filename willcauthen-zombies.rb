chapter 2 zombie.thing

class Zombie < ActiveRecord::Base
	  validates :name, presence: true, uniqueness: true
end
class Weapon < ActiveRecord::Base
	belongs_to :zombie
end


<h1><%= zombie.name %></h1>

<p>
  <%= zombie.graveyard %>
</p>

<p>
<%=  link_to zombie.name, zombie %>
</p>

<ul><% zombies.each do |zombie| %>
  <li>  <%= zombie.name%></li>
  <% end %>
</ul>

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
	<% if zombie.tweets.size > 1%>
       SMART ZOMBIE
    </li>
  		<% end %>
  <% end %>
</ul>

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>


class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find (params[:id])
  end
end

class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])

    respond_to do |format|
      format.xml {render xml: @zombie }
    end
  end
end

class ZombiesController < ApplicationController
  def create
    @zombie = Zombie.create (zombie_params)
    redirect_to zombie_path(@zombie)
  end

  private

  def zombie_params
    params.require(:zombie).permit(:name, :graveyard)
  end
end
def create 
  @zombie = Zombie.create(zombie_params)
  redirect_to zombie_path(@zombie)
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

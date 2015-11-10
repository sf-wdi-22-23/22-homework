Level 1

Zombie.find(1)
Jim = Zombie.create 
Zombie.last
Zombie.order(:name)
Zombie.find(3).update(graveyard: 'Benny Hills Memorial')
Zombie.find(3).delete

Level 2
class Zombie < ActiveRecord::Base
	validates_presence_of :name
	validates_uniqueness_of :name
	validates :name, presence: true, uniqueness: true
end
class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

z = Zombie.find(1)
z.weapons

Level 3
<h1><%= zombie.name %></h1>

<p>
  <%= zombie.graveyard %>
</p>
<p>
<%= link_to zombie.name, zombie %>
</p>
<ul>
<% zombies.each do |zombie| %>
  <li><%= zombie.name %></li>
<% end %>
</ul>
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      <% if zombie.tweets.size >1%>
   		SMART ZOMBIE 
      <%end%>
    </li>
  <% end %>
</ul>
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <a href="<%= edit_zombie_path(zombie) %>"> <%= zombie.name %></a>
    </li>
  <% end %>
</ul>
Level 4
class ZombiesController < ApplicationController
  def show
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

Zombie.find(1)
Zombie.create
Zombie.last
Zombie.order(:name)
Zombie.find(3).update(graveyard:"Benny Hills Memorial")
$ Zombie.find(3).destroy

class Zombie < ActiveRecord::Base end
validates_presence_of :name
validates :name,uniqueness: true
validates :name, presence: true, uniqueness: true
belongs_to :zombie
Zombie.find_by(name:"Ashley").weapons
<h1><%= zombie.name %></h1>  <%= zombie.graveyard %>
<%=  link_to zombie.name, zombie %>

<% zombies.each do |n| %>
  <li><%= n.name %> </li>
  <% end %>

   <% if zombie.tweets.length > 1 %>
  <li> SMART ZOMBIE</li>
  <% end%>

  <%= link_to zombie.name,
  edit_zombie_path(zombie)%>

  @zombie = Zombie.find(params[:id])
     format.xml {render xml: @zombie}

  @zombie = Zombie.create(zombie_params)
  redirect_to zombie_path(@zombie)

  
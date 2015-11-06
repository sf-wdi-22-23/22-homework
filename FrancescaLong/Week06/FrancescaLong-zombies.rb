Level 1
Zombie.find(1)
Zombie.last
Zombie.order(:name)
Zombie.create

Zombie.find(3)
z.graveyard = "Benny Hills Memorial"
z.save

Zombie.destroy(3)



Level 2
class Zombie < ActiveRecord::Base
end

validates :name, presence: true
validates :name, uniqueness: true

validates :name, 
      	   uniqueness: true,
  		   presence: true

class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

z = Zombie.find(1)
z.weapons



Level 3

<% zombie = Zombie.first %>
<h1><%= zombie.name %></h1>
​
<p>
  <%= zombie.graveyard %>
</p>



<% zombie = Zombie.first %>

<p>
<%= link_to zombie.name, zombie %>
</p>



<% zombies = Zombie.all %>

<ul>
<% zombie.each do |zombie| %>
  <li><%= zombie.name %></li>
  <% end %>
</ul>




<% zombies = Zombie.all %>

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



<% zombies = Zombie.all %>

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>








Zombie.find(1)
Zombie.create
Zombie.last
Zombie.order(:name)
zombie = Zombie.find(3)
zombie.graveyard = "Benny Hills Memorial"
zombie.save
Zombie.destroy(3)

class Zombie < ActiveRecord::Base

end

class Zombie < ActiveRecord::Base
  validates_uniqueness_of :name
end

class Zombie < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
end

class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

$ zombie = Zombie.find(1)
$ zombie.weapons

<% zombie = Zombie.first %>

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
      <% if zombie.tweets.size > 1 %>
      SMART ZOMBIE 
      <% end %>
    </li>
  <% end %>
</ul>

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>


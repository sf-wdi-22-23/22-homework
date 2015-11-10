Level 1: 	Zombie.find(1)
			Zombie.create(name:"Joe", graveyard:"225 Bush")
			Zombie.last
			Zombie.order(:name)
			Zombie.find(3).update(graveyard:"Benny Hills Memorial")
			Zombie.destroy(3)

Level 2: 	class Zombie < ActiveRecord::Base
			end
			validates_presence_of :name
			validates_uniqueness_of :name
			validates :name, presence:true, uniqueness:true
			belongs_to :zombie
			Zombie.find(1).weapons

Level 3: 	zombie.name
			zombie.graveyard
			link_to zombie.name, zombie

			<ul>
				<% zombies.each do |zombie| %>
  					<li> <%= zombie.name %> </li>
  				<%end%>
			</ul>

			<% if zombie.tweets.size > 1 %>
      			<em>SMART ZOMBIE</em>
      		<%end%>

      		<%= link_to zombie.name, edit_zombie_path(zombie) %>

Level 4:

Level 5:
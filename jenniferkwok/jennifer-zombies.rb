#LEVEL 1
Zombies.find(1)
Zombie.create
Zombie.last
Zombie.order(:name)
#Update
u=Zombie.find(3)
u.graveyard="Benny Hills Memorial"
u.save
#Delete
Zombie.find(3).destroy

#LEVEL 2
#Create Zombie model
#validates presense of Zombie's name and uniqueness
class Zombie < ActiveRecord::Base
	validates_presence_of :name
	validates_uniqueness_of :name
end
#validate in one line
class Zombie < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
end
#Weapon belongs to zombie
class Weapon < ActiveRecord::Base
  belongs_to :zombie
end
#find weapons that belong to Ashley
z=Zombie.find_by name: 'Ashley'
z.weapons

#LEVEL3
<h1><%= zombie.name %></h1>
<p>
  <%= zombie.graveyard %>
</p>

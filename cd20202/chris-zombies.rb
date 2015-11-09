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

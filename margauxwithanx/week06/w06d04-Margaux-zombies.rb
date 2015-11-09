Level 1

# Try to find a Zombie where the ID is 1.
Zombie.find(1)

# Create a new Zombie.
Sam = Zombie.create 

# Find the last Zombie in the database, but don't use IDs
Zombie.last

# Find all Zombies ordered by their names.
Zombie.order(:name)

# Update Zombie 3's graveyard to 'Benny Hills Memorial'
Zombie.find(3).update(graveyard: 'Benny Hills Memorial')
Zombie.find(3).destroy

Level 2
class Zombie < ActiveRecord::Base
end

class Zombie < ActiveRecord::Base
    validates_presence_of :name
end

class Zombie < ActiveRecord::Base
  validates_uniqueness_of :name
end

class Zombie < ActiveRecord::Base
  validates :name, :presence => true, :uniqueness => true
end

class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

Level 3
# Print out the zombie's name and graveyard.
<h1><%= zombie.name %></h1>

<p>
  <%= zombie.graveyard %>
</p>

# Link to the zombie's show page. Use the zombie's name as the anchor text
<p>
<%= link_to zombie.name, zombie %>
</p>

# Use an each block to print the names of all the zombies.
<ul>
<% zombies.each do |zombie| %>
<%= zombie.name %>
<% end %>
</ul>

#In the each block, if a zombie has more than one tweet, print out SMART ZOMBIE.
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
		<% if zombie.tweets.count >1%>
      <p> SMART ZOMBIE </p>  	
      <% end %>
  </li>
  <% end %>
</ul>

#In the each block, make the zombie's name link to its edit page.
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>


Level 4
#Create the show action for the ZombiesController which finds a Zombie based on params[:id]. 
#Store the Zombie object to an instance variable named @zombie.
class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])
  end
end

#Finish the respond_to block so the action returns the XML of the @zombie record
class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])
    respond_to do |format|
      format.html 
      format.xml {render xml: @zombie}
    end
  end
end

#Write a create action that will create a new Zombie from the params 
#and then redirect to the created Zombie's show page. 
#Make sure to use Rails 4 strong_parameters.
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

#Add a before_action that calls a method to check if a Zombie has tweets. 
#Redirect to zombies_path if the zombie doesn't have tweets, only on show.
class ZombiesController < ApplicationController
  before_filter :find_zombie
  before_filter :check_tweets, :only => :show
  
  def check_tweets
    if @zombie.tweets.size == 0
      redirect_to zombies_path
    end
  end

  def show
    render :action => :show
  end

  def find_zombie
    @zombie = Zombie.find params[:id]
  end
end

























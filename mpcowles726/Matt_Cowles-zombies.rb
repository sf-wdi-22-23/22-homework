
Zombie Challenge 

1.) t = Tweet.find(3)
2.) w = Weapon.find(1)
3.) Create => t = Tweet.new     t.status"blahblah" t.save
4.) Read => t = Tweet.find(3) 
5.) Update => t = Tweet.find(3) t.zombie = "eyballchomper"   t.save
6.) Delete => t = Tweet.find(3).destroy



	----ALTERNATE SYNTAX----
7.) CREATE => Tweet.create(HASHINFO)
8.) READ => Tweet.find/first/last/all
	a.) Tweet.count (returns total number of zombies)
	b.) Tweet.order(:zombie) (returns tweets ordered by zombies)
	c.) Tweet.limit(10)  (returns first 10 zombies)
	d.) Tweet.where(ash)  (returns all tweets made by ash)
		I.) method chaining => Tweet.where(ash).first (returns just the first tweet by ash)
		


9.) UPDATE => Tweet.find(3).update(HASHINFO)
10.) DELETE => Tweet.find(3).destroy
	a.) Tweet.destroy_all

11.) VALIDATIONS => validates :status, <-----SOME ATTRIBUTE :presence, :true  <-----VALIDATION
							  :length, { minimum: 3}
							  :presence, true
							  :uniqueness, true
							  :numericality, true
							  :format, { with: /.*/}	

12.) RELATIONSHIPS => 
						A zombie has many tweets. 

						app/models/zombie.rb
							
							class Zombie < ActiveRecord::Base
								has_many :tweets  <-----PLURAL
							end



						A tweet belongs to a zombie.
							
						app/models/tweet.rb

							class Tweet < ActiveRecord::Base
								belongs_to :zombie <----SINGULAR
							end


			USING RELATIONSHIPS

		ash = Zombie.find(1)

		t = Tweet.create(status: "blahblahblah", zombie: ash)

		ash.tweets.count
			1 now since we just made a TWEET with the zombie attribute ASH

		ash.tweets
			["blahblahblah"]


13.) SHOWING A TWEET 
			IN YOUR VIEW FOLDER, WHICHEVER FILE YOU ARE SHOWING (TWEETS FOR EXAMPLE)

			<% tweet = Tweet.find(1) %>   <---setting variable to  first tweet
			<h1><%= tweet.status %></h1> <--- SHOWING first tweet
			<p>Posted by <%= tweet.name %> <--- SHOWING name of poster


























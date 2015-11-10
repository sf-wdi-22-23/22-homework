Secure Passwords and the User Model

*Could you create a user without an email? How do you know?
	not in this situation you need the email to find the user when authenticating
*How would you call the User model's password getter method (is it an instance method or a class method)?
	instance method? are you talking about def password?
Is the User model's password= an instance method or a class method? What is it using BCrypt for?
	it looks like a class method? still unclear but its using bcrypt to encrypt the password.
*Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
	It looks like a class method since it calls self and returns self. 
*How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
	class method? it finds and matches username and passwords
*Which User model method interacts with the database?
	authenticate since it makes a new Password

Login/Logout with Sessions

*What object does Rails give us to access session information? What kind of object is it?
	A hash 
*Why do we have a SessionsController?
	to have crud operations available on sessions?
*What does the sessions#new controller action do?
	not much, but allows for new sessions?
*The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
	it goes the the users session - if it fails it creates a new session
*What does sessions#destroy do (signup, login, or logout)?
	i would guess logout
*What route(s) would we have to add if we want users to be able to edit their information?
	an edit route? patch?

Current User with Helper Method

Why would we want to keep track of the currently logged in user?
	to know what they are athorized to do nad to make sure no one hijacks their session
What is the current_user helper method in app/controllers/application_controller.rb doing?
	makes the current user available to views?
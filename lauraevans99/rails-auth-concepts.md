Secure Passwords and the User Model

Could you create a user without an email? How do you know?
You can't because the validation line requires the presence to be true.

How would you call the User model's password getter method (is it an instance method or a class method)?
I'd call password.  It's an instance method.

Is the User model's password= an instance method or a class method? What is it using BCrypt for?
It is an instance setter method.  It's using BCrypt to hash the password passed in and compare it to the stored password.

Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
It's an instance method.  Not sure what it returns.

How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
It is a class method.  It calls the authenticate method to check whether a user is who they say they are.

Which User model method interacts with the database?
The password setter method.



Login/Logout with Sessions

What object does Rails give us to access session information? What kind of object is it?
Why do we have a SessionsController?
It gives us the sessions object.  It's a hash.  We have a session controller to group all our session methods in order to keep RESTful routes.

What does the sessions#new controller action do?
It creates a new session.

The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
If it succeeds, it maps a session to a specific user and redirects that user to a specific path.  If it fails, it redirects to a specific path.

What does sessions#destroy do (signup, login, or logout)?
It removes the user id associated with the session hash and redirects to a specific path.

What route(s) would we have to add if we want users to be able to edit their information?
profile/edit



Current User with Helper Method

Why would we want to keep track of the currently logged in user?
In order to maintain their specific settings and actions taken.

What is the current_user helper method in app/controllers/application_controller.rb doing?
It identifies whether or not there is a current user present.
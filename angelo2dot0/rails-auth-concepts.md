Secure Passwords and the User Model

Could you create a user without an email? How do you know?
Yes, possible to use migration to change default.

How would you call the User model's password getter method (is it an instance method or a class method)?
It is an instance method.

Is the User model's password= an instance method or a class method? What is it using BCrypt for?
Instance method, to encrypt password.

Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
Class method, to verify password match, self.

How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
Class method, finds user by email, then verifies password match.

Which User model method interacts with the database?
Authenticate, and self.confirm.

===========================
Login/Logout with Sessions

What object does Rails give us to access session information? What kind of object is it?
session, hash.

Why do we have a SessionsController?
to manage login and logout.

What does the sessions#new controller action do?
it does login.

The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
it saves user info to the session, or else, it redirects to a new session path.

What does sessions#destroy do (signup, login, or logout)?
logout.

What route(s) would we have to add if we want users to be able to edit their information?
users#edit

============================
Current User with Helper Method

Why would we want to keep track of the currently logged in user?
to verify that the user is logged in, and to set the path to the current user's profile.

What is the current_user helper method in app/controllers/application_controller.rb doing?
it makes the current_user method available to views.
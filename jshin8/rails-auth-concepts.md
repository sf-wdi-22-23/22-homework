Secure Passwords and the User Model

Could you create a user without an email? How do you know? No, an email/username is required, as it is associated with a particular password. 
How would you call the User model's password getter method (is it an instance method or a class method)? instance method
Is the User model's password= an instance method or a class method? What is it using BCrypt for? instance method. BCrypt is being used to encrypt the instance's password and create the password_digest variable.
Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match? class method. BCrypt is used to unenrypt the password_digest in order to be compared with the submitted password. If the passwords match, "self" is rendered. (?)
How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do? class method. The method confirms that the email and password are associated.
Which User model method interacts with the database? self.confirm

Login/Logout with Sessions

What object does Rails give us to access session information? What kind of object is it? session method (?)
Why do we have a SessionsController? In order to manage login and logout.
What does the sessions#new controller action do? login from
The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails? saves user info to the session.
What does sessions#destroy do (signup, login, or logout)? logout
What route(s) would we have to add if we want users to be able to edit their information? update

Current User with Helper Method

Why would we want to keep track of the currently logged in user? In order to navigate a website and have activity saved and stored.
What is the current_user helper method in app/controllers/application_controller.rb doing? verifies that the current user matches the session user id.
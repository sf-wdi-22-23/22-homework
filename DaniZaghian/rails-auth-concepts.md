Secure Passwords and the User Model

1) Could you create a user without an email? How do you know?
You could use a username instead of an email. But you can't create a user with just a password or it has nothing to compare the password with.

2) How would you call the User model's password getter method (is it an instance method or a class method)?
Instance method: You call it with password. 

3) Is the User model's password= an instance method or a class method? What is it using BCrypt for?
Instance method. It's using bcrypt to define self.password_digest as the stored password based on the unencrypted_password.

4) Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
Instance method. It's using BCrypt to hash the password and then comparing that with the unencrypted password. If it's correct, it returns the instance of the User model it's comparing. 

5) How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
This is a class method (self always is a class method). 

6) Which User model method interacts with the database?
self.confirm 

Login/Logout with Sessions

1) What object does Rails give us to access session information? What kind of object is it?
session[:user_id] is a method..? Not 100% sure.

2) Why do we have a SessionsController?
So we can use restful routes effectively when we create new sessions and destroy them.

3) What does the sessions#new controller action do?
I believe it should route to the login page (it will render new.html.rb which should be login).

4) The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
If it succeeds, it redirects to the user route by their id (user_path(user.id)). If it fails, it redirects to the login page.

5) What does sessions#destroy do (signup, login, or logout)?
It sets the session id for current logged in user to nil and redirects to the homepage (root). Essentially it logs out.

6) What route(s) would we have to add if we want users to be able to edit their information?
:edit in the resources :sessions array. 

Current User with Helper Method

1) Why would we want to keep track of the currently logged in user?
To check if the user is logged in and be able to path to the users profile.

2) What is the current_user helper method in app/controllers/application_controller.rb doing?
It's setting the current_user to the session of the User.


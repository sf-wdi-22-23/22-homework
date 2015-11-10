*Secure Passwords and the User Model*

Could you create a user without an email? How do you know?
- You can create a user without an email. I recall from using express and mongoose that it all depends what you put in the schema. If you indicate that the user needs an email in the schema, then you will be required to input an email.


How would you call the User model's password getter method (is it an instance method or a class method)?

-You would call the User models' password getter method by a series of instance methods

Is the User model's password= an instance method or a class method? What is it using BCrypt for?
- You would use an instance method for a User Model's password. It is using Bcrypt to hash the password the user inputs.

Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
- The User model authenticates the instance method of the authenticate method, it is verifying secure_password/self instance to see if it matches the unencrypted password.

How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
- To call the User model's self.confirm method, one would have to call the function via as a class method, since you are directly calling the name class name User in the method. The method will function when the user inputs an email + password, when they submit the form to the database, the server will send their request to the database and see if the email and password matches. 

Which User model method interacts with the database?
- The self.confirm method directly interacts with the database. The user sends a request which interacts with the database, if the authentication criteria matches, then the user will be able to login.


*Login/Logout with Sessions*

What object does Rails give us to access session information? What kind of object is it?
- Rails give us a cookie object that includes the session id. From there, you can save and retrieve the values using the session method. 

Why do we have a SessionsController?
-  We have a SessionsController because we are defining a new class SessionsController which inherit all methods + actions from the ApplicationController.


What does the sessions#new controller action do?
- The sessions#new controller actions controls the login form.


The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
- Sessions#create redirects back to the session that matches the userid of the user, if it fails and does not identify a session for that user, it will redirect and create a new session for that user.


What does sessions#destroy do (signup, login, or logout)?

It deletes the current session and redirects back to the root path.

What route(s) would we have to add if we want users to be able to edit their information?

Routes we need to add: the :update and :edit routes to the routes.rb file

*Current User with Helper Method*

Why would we want to keep track of the currently logged in user?

- We want to keep track of the currently logged in user in order to store a cookie for that user in the database.

What is the current_user helper method in app/controllers/application_controller.rb doing?

- The current user method defines the current user's session id and finds it in the database.

Secure Passwords and the User Model

Could you create a user without an email? How do you know?

<!-- the email, as far as I can tell, is only used because it is unique and verifiable. We could also use usernames, or something similar. -->


How would you call the User model's password getter method (is it an instance method or a class method)?
<!-- i think it's a method, since it's used as a verb? -->

Is the User model's password= an instance method or a class method? What is it using BCrypt for?
<!-- instance method -->

Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
<!-- it looks as though it's a class method that takes an instance method. BCrypt is being used to generate a password digest from the password, which is being used as an instance method, and then it returns the salted password -->

How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
<!-- class method. it's matching the password digest on record against the one it's recieved, and against the associated email -->

Which User model method interacts with the database?
<!-- authenticate? -->


Login/Logout with Sessions

What object does Rails give us to access session information? What kind of object is it?
<!-- rails confirms the users password and email, and if they make up a real user, the session is started. confirm? -->

Why do we have a SessionsController?
<!-- the session controller would be able to control what the user has access to, depending on whether or not they have a session -->

What does the sessions#new controller action do?
<!-- not much. looks like it's just there for the purpose of being defined -->

The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
<!-- if login succeeds, the session#create creates a session corresponding to the user's id, and then redirects to user page(?). if failed, the page redirects to a new session path. -->

What does sessions#destroy do (signup, login, or logout)?
<!-- ends the session, and takes user to the index page -->

What route(s) would we have to add if we want users to be able to edit their information?
<!-- edit and update -->


Current User with Helper Method


Why would we want to keep track of the currently logged in user?
<!-- to make sure they have access to the requests they're making, and don't go muching up the database or mess with other users' accounts -->

What is the current_user helper method in app/controllers/application_controller.rb doing?
<!-- makes the current user available to be manipulated in the views folder -->
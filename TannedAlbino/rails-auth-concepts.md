
Could you create a user without an email? How do you know?
<!-- In this case no.  When creating a user, the parameters are set for an email submission, which is then used to authenticate the user and verify that the email address matches the password -->
How would you call the User model's password getter method (is it an instance method or a class method)?
<!-- It is an instance method as it is only getting the password at the instance. -->

Is the User model's password= an instance method or a class method? What is it using BCrypt for?
<!--  password= is a class method that is then using an instance method, in this case BCrypt, to take the unencrypted password supplied , and use Bcrypt to create a new encrypted password.-->

Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
<!-- Is is a class method for authentication that uses the instance method for authenticating an unencrypted password and put it in a new variable 'secure_password' -->

How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
<!-- it would be called when a user provides an email and password.  It verifies that there is an email already provided previously and a password associated to that email for authentication. -->

Which User model method interacts with the database?
<!-- self.confirm -->

Login/Logout with Sessions

What object does Rails give us to access session information?
What kind of object is it?
<!-- It gives a hash of values and a session id to identify the hash.  Usually it is a cookie that includes them. -->

Why do we have a SessionsController?
<!-- To allow the tracking of a certain state of a particular user without the need to identify and authenticate on every request. -->

What does the sessions#new controller action do?
<!-- it creates a new session whereby a user can proceed and be authenticated and save certain information of the session so long as the user remains in session. -->

The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
<!-- If login succeeds, there is a redirect to the user path with the user id used, if fails, it is a redirect to a new session  -->

What does sessions#destroy do (signup, login, or logout)?
<!-- It makes the user_id session = nil, which in effect deletes the session information -->

What route(s) would we have to add if we want users to be able to edit their information?
<!-- we would have to add a user profile route. -->

Current User with Helper Method

Why would we want to keep track of the currently logged in user?
<!-- Keeping track of the currently logged in user enables a user to send and receive requests without needing to authenticate each and every requests. -->

What is the current_user helper method in app/controllers/application_controller.rb doing?
<!-- makes the current_user method available to views -->
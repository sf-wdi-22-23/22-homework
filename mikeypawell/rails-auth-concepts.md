Secure Passwords and the User Model

1) Could you create a user without an email? How do you know?

A) No, because of validates :email, presence: true

2) How would you call the User model's password getter method (is it an instance method or a class method)?

A) Instance Method.  

3) Is the User model's password= an instance method or a class method? What is it using BCrypt for?

A) Class Method  It is using BCrypt to create a new crypted password password from the uncrypted password. 

4) Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?

A) Class Method.  It uses BCrypt to create a new crypted password, and checks the secure password to the unencrypted password. 

5)How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?

A) Instance Method.  It finds the user by email, then runs the authenticate method taking in the parameters email and password. 

6)Which User model method interacts with the database?

A) not sure 



Login/Logout with Sessions

1)What object does Rails give us to access session information? What kind of object is it?

A) :user_id

2) Why do we have a SessionsController?

A) It would not be clean to include it in the Application Controller. 

3) What does the sessions#new controller action do?

A) creates a new instance, to then create a new session. 

4)The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?

A) If login suceeds than a session is created based on the user id, than the user is redirected to the user path.

   If login fails, the user is redirected to a new_session_path

5)What does sessions#destroy do (signup, login, or logout)?

A) Its sets the user_id to nil, which logsout the user and redirects them to root path.

6)What route(s) would we have to add if we want users to be able to edit their information?

A) To edit their information we need to add a GET /(....)/:id/edit route. 



Current User with Helper Method

1)Why would we want to keep track of the currently logged in user?

A) We want to keep track of the currently logged in user, so that we can access any information that has been saved to the server under their username. 

2)What is the current_user helper method in app/controllers/application_controller.rb doing?

A) It makes current_user method available to views


















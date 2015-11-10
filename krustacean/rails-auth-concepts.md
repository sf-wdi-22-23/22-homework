### Secure Passwords and the User Model

1. Could you create a user without an email? How do you know?
  - NO, because we are validating :email and :password_digest.
1. How would you call the User model's password getter method (is it an instance method or a class method)?
  - User.password its a class method.
1. Is the User model's password= an instance method or a class method? What is it using BCrypt for?
  - Class method hashing the password.
1. Is the User model's authenticate an instance method or a class method?
  - Instance method.
1. What does it use BCrypt for? What does it return if passwords match?
  - It uses BCrypt to salt and hash the password, it returns `self`.
1. How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
  - user.confirm? It's an instance method.
1. Which User model method interacts with the database?
  - `self.confirm`

### Login/Logout with Sessions

1. What object does Rails give us to access session information?
  - session
1. What kind of object is it?
  - hash
1. Why do we have a SessionsController?
  - Because we'll be logging in by accessing `sessions#create`.
1. What does the sessions#new controller action do?
  - Gives us the redirect actions to the create methods
1. The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
  - If it succeeds it creates a new session id from the user id and the redirects to the user page. If it fails it redirects to a login page.
1. What does sessions#destroy do (signup, login, or logout)?
  - Logout and redirects to homepage.
1. What route(s) would we have to add if we want users to be able to edit their information?
  - session#update

### Current User with Helper Method

1. Why would we want to keep track of the currently logged in user?
  - To make sure we are serving them the correct information and also to prevent session hacking.
1. What is the current_user helper method in app/controllers/application_controller.rb doing?
  - It's making the `:current_user` method available in other places within the rails app.


*****Rails auth concepts******
###Secure Passwords and the User Model###
1-We cant create a user without an emai
2-User's model password getter is an instance method because we need to have a getter for any instance
3-User model's password= is a class method, using Bcrypt will create a hash for the password, to be more secure
4-User's model authenticate is a class method, it is using Bcrypt to compare the password in the input to the password created the first time. it returns true if the passwords match
5-User model's self.confirm method is a class method. it verifies if the user with email/password
6-it's self.confirm

###Login/Logout with sessions###
1- Rails is able to create, store and save user's session
2-In the session controller, we have the create action to create the session when a user is authenticated, and the destroy method
3-session#new action is for when a new session will be created
4-If it succeeds ,it creates a session, else it redirect to the new_path_session (to try again)
5-The destroy method for destroying a session and go back to the main path
6- /users/:id/edit for editing their information
/users/:id/destroy to delete an account

##Current User with Helper Method##
1-We want to keep the current logged user, to not lose the information, for example if we were having a user with orders, we don't want to lose that and keep those orders to that user id
2-current_user helper method will keep track on the user's session's id, if the session'id != nil then it can find the user, else, there is no user, and no special view to the user exists
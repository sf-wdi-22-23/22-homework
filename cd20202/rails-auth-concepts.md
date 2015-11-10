Secure Passwords 

1. You can't because of validates presence: true.

2. It's an instance variable. User.password_digest? 

3. Instance method. It uses bcrypt to generate a password digest for the instance.

4. Instance? It uses bcrypt to encrypt the password and compare it with the secure password?

5. Class method. It checks if there is a user with that email in the database and if that user's password is the given password.

6. Self.confirm interacts with the database.

Sessions

1. The sessions hash. 

2. In order to keep restful routes for logins and logouts. 

3. Sessions#new shows the login form 

4. It creates the current session and redirects to that users page assuming. If it fails, it sends us back to the login form. 

5. Session#destroy logs out and redirects to index. 

6. user#edit? user#update?

Current User 

1. For authentification, to display current user data, and other useful data. 

2. Gets the current user from the database based off of the session ID.



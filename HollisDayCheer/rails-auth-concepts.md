1. You could not. There's the validates presence: true thing. 
2. It's an instance variable. User.password_digest is the getter? This seems weird. I have to assume the bcrypt generates a getter.  
3. It is an instance method. It uses bcrypt to generate a password digest for the instance.
4. It looks like an instance again? I thought classes were def self.functionname. It uses bcrypt to unencrypt the previously encrypted password and compare it with the unsecure password?
5. This is a class method. You would say User.authenticate email, password. It checks if there is a user with that email in the database and if that user's password is the given password. 
6. Self.confirm is the method that interacts with the database. 


Sessions: 
1. It gives us the sessions hash. 
2. We have the sessions controller in order to keep restful routes for logins and logouts. 
3. Sessions#new just shows the login form
4. If session#create succeeds, it creates the current session and redirects to that users page assuming I am reading the rails correctly. If it fails, it sends us back to the login form.
5. Session#destroy just logs out and redirects to index.
6. Just a user#edit. I don't think you would need to change session info. 

current user helpers. 
1. We want to keep track of logged in users so we can figure out authentification, just display current user data, and other useful stuff. 
2. The current user helper method just gets the current user from the database based off of the session ID. 
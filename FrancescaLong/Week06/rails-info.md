1. What is a strength of Rails (or something you like about Rails)?
	Simplifies Ruby?

2. What is the name of the server Rails comes with, and what is the name of the database it comes with?
   Server is WEBrick, Database is SQLite3

3. What is a "resource"?
   Collection of similar objects. Can create, read, update, delete.

4. What is a "controller"? How is it different from a "route"?
	Route decides which controller receives requests for the application.  

5. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
    In the routes themselves.

6. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
  It looks like links to bootstrap, other libraries. 

7. The app/controllers/articles_controller.rb file looks like:
    - What does the first line ArticlesController < ApplicationController mean?
        Articles controller is a child of Application controller
    - How does ArticlesController#new know which view to display?
    	It is referenced in the new.html.erb file.
    - Why does @article have that @?
    	Needs to be available outside of the method
 
8. What is ActiveRecord? What was the equivalent tool we used with Express?
	Model for creating / storing data. Mongoose equivalant.

9. What is a "migration"?
    Ruby class that simplifies creating / modifying database tables.

10. List at least one question you have about Rails (can go over 8 word max if needed).
	I need to see it in action more before I can come up with questions. The example in the reading was prebuilt so it is hard to think of questions yet.
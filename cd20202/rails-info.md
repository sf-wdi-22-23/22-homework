1. What is a strength of Rails (or something you like about Rails)?
Less code required to do the same

2. What is the name of the server Rails comes with, and what is the name of the database it comes with?
WEBrick is the server and SQLite3 is the database

3. What is a "resource"?
Collection of similar objects

4. What is a "controller"? How is it different from a "route"?
Controller handles specific requests from the server. Its different because it can take requests from many routes.

5. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
Server?

6. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
Reminds me of EJS / templating file


7. The app/controllers/articles_controller.rb file looks like:
What does the first line ArticlesController < ApplicationController mean?
	It inheirts from ApplicationController
How does ArticlesController#new know which view to display?
	It will look to its parent and inherit its view
Why does @article have that @?
	Its an instance variable

8. What is ActiveRecord? What was the equivalent tool we used with Express?
EJS

9. What is a "migration"?
Tool for managing database schemas

10. List at least one question you have about Rails (can go over 8 word max if needed).
I'm still lost on what they mean by rails is opinionated



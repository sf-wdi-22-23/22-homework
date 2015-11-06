What is a strength of Rails (or something you like about Rails)
Convention over configuration

What is the name of the server Rails comes with, and what is the name of the database it comes with?
WEBrick, SQLite database

What is a "resource”?
The term used for a collection of similar objects, such as articles, people or animals.

What is a "controller"? How is it different from a "route”?
It’s a receiver of specific requests for the application. Routing decides which controller receives which requests.

In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
In the routing section.

Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
It looks like the index file. It contains the html doc.

The app/controllers/articles_controller.rb file looks like:
What does the first line ArticlesController < ApplicationController mean? ArticlesController is a a class that is defined to inherit from ApplicationController.
How does ArticlesController#new know which view to display? Because it has a template associated with it.
Why does @article have that @? Because it is an instance variable.

What is ActiveRecord? What was the equivalent tool we used with Express?
It is the record being created in the database.

What is a "migration"?
It is a ruby class.

List at least one question you have about Rails (can go over 8 word max if needed).
What exactly is require & permit in ruby?
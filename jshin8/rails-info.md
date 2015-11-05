1. What is a strength of Rails (or something you like about Rails)?
  Allows user to write less code while accomplishing more than many other languages.
2. What is the name of the server Rails comes with, and what is the name of the database it comes with?
  WEBrick is the default web server distributed with Ruby, and ActiveRecord is the database.
3. What is a "resource"?
  A resource is a collection of similar objects. Resources can be CRUD'ed.
4. What is a "controller"? How is it different from a "route"?
  A controller receives requests/information for the application. Routes determine which controller receives a particular request.
5. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
  server
6. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
  It is similar to .ejs files. It is a template system.
7. The app/controllers/articles_controller.rb file looks like:

  class ArticlesController < ApplicationController
    def new
    end

    def create
      @article = Article.new(article_params)

      @article.save
      redirect_to @article
    end

    def show
      @article = Article.find(params[:id])
    end

    private
      def article_params
        params.require(:article).permit(:title, :text)
      end
  end

  - What does the first line ArticlesController < ApplicationController mean? 
  ArticlesController is a subclass of ApplicationController. 
  - How does ArticlesController#new know which view to display?
  ArticlesController will look to its parent class, ApplicationController, to inherit its view.
  - Why does @article have that @?
  The @ signifies that article is an instance variable.
8. What is ActiveRecord? What was the equivalent tool we used with Express?
  ActiveRecord is a framework that handles the representation of data and logic in Rails. MongoDB is a similar tool used with Express.
9. What is a "migration"?
  Migrations are domain-specific language for managing database schema.
10. List at least one question you have about Rails (can go over 8 word max if needed).
  What are generators? Is there an Express equivalent?
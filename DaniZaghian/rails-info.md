
1) What is a strength of Rails (or something you like about Rails)?
  Writing the least amount of code and efficiency. 

2) What is the name of the server Rails comes with, and what is the name of the database it comes with?
  WEBrick comes with the database SQLite 

3) What is a "resource"?
  Equal to a collection in mongodb

4) What is a "controller"? How is it different from a "route"?
  Controller handles requests, routes send requests to controllers.

5) In Express, server.js contained our routes. Where was controller logic defined in our Express projects? 
  server js also contained logic for CRUD operations

6) What is a "migration"?
  A class used to create/modify database tables

Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
  Looks a lot like ejs/html, contains clown hats

The app/controllers/articles_controller.rb file looks like:

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

7) What does the first line ArticlesController < ApplicationController mean?
  ArticlesController class inherits from ApplicationController class

8) How does ArticlesController#new know which view to display?
  Because every time you create a new instance of ArticlesController it is looking at just that Article.new you create. Not 100% sure.

9) Why does @article have that @?
  Its an instance variable of the ArticlesController class

10) List at least one question you have about Rails (can go over 8 word max if needed).
  What exactly do we need to know as ruby on rails developers, and what is not important? I am trying to crowd my brain with only necessary information at this point!


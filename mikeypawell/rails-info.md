1) What is a strength of Rails (or something you like about Rails)?

  Rails appears to be relatively easy to use, and allows you to get up and running very quickly.

2) What is the name of the server Rails comes with, and what is the name of the database it comes with?
  
  WEBrick and SQLite3.

3) What is a "resource"?

  a collection of similar objects.  You can use CRUD on resources

4) What is a "controller"? How is it different from a "route"?
  
  A controller's purpose is to receive specific requests for the application.

5) In Express, server.js contained our routes. Where was controller logic defined in our Express projects?

  In the models (user.js)
  

6) Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?

7) The app/controllers/articles_controller.rb file looks like:

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

    -What does the first line ArticlesController < ApplicationController mean?

    -How does ArticlesController#new know which view to display?

    -Why does @article have that @?

8) What is ActiveRecord? What was the equivalent tool we used with Express?

  Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database.

9) What is a "migration"?

  a domain-specific language for managing a database schema

10) List at least one question you have about Rails (can go over 8 word max if needed).
  



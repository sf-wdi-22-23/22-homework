
1. What is a strength of Rails (or something you like about Rails)?
  Since Rails is unopinionated, it can be very powerful in terms of creating a great deal of functionality very quickly.

2. What is the name of the server Rails comes with, and what is the name of the database it comes with?
  The server is called WEBrick and the database is called SQLite3 Database.

3. What is a "resource"?
  A resource is the term used for a collection of similar objects, such as articles, people or animals. You can create, read, update and destroy items for a resource and these operations are referred to as CRUD operations.

4. What is a "controller"? How is it different from a "route"?
  A controller's purpose is to receive specific requests for the application. Routing decides which controller receives which requests.  A view's purpose is to display this information in a human readable format. An important distinction to make is that it is the controller, not the view, where information is collected. The view should just display that information.

5. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
  In app.js

6. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
  It reminds me of an ejs file.  It contains html with embedded data from elsewhere.

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

	A. What does the first line ArticlesController < ApplicationController mean?
    It creates a class called ArticlesController that inherits from the class ApplicationController.

	B. How does ArticlesController#new know which view to display?
    It inherits it's views? Not sure...

	C. Why does @article have that @?
    Because it's an instance variable created in a class.

8. What is ActiveRecord? What was the equivalent tool we used with Express?
  Active Record supplies a great deal of functionality to your Rails models for free, including basic database CRUD (Create, Read, Update, Destroy) operations, data validation, as well as sophisticated search support and the ability to relate multiple models to one another.  
  The equivalent tool was Mongoose.

9. What is a "migration"?
  Migrations are Ruby classes that are designed to make it simple to create and modify database tables.

10. List at least one question you have about Rails (can go over 8 word max if needed).
  Can we get a high-level picture of how all the components of rails work together?
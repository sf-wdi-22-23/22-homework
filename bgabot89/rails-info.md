What is a strength of Rails (or something you like about Rails)?
-What I like about rails is that the syntax is much shorter compared to javascript. I.e.. when dealing with routes you can now just type #get 'welcome/index' instead of typing in an entire app.get route. Hooking up to the localhost is much easier with ruby as well.


What is the name of the server Rails comes with, and what is the name of the database it comes with?
-The server that Rails come with is Ruby on Rails
-The name of the database is called SQLite 3


What is a "resource"?

- A resource is a term used for a collection of similar objects, such as articles, people or animals


What is a "controller"? How is it different from a "route"?

- A controller is used to receive special requests for the application. It is different from a route because routing decides which controller receives which requests. 

In Express, server.js contained our routes. Where was controller logic defined in our Express projects?

-In Express, controller logic was defined by sending requests from the client to the database using mongoose.

Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?

-The format reminds me of the ejs file used in express. 

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

What does the first line ArticlesController < ApplicationController mean?

- It means that the class ArticlesController that is defined to inherit from the ApplicationController class.
How does ArticlesController#new know which view to display?


Why does @article have that @?

- The article has an @ because we are creating an instance of it so we can store data.


What is ActiveRecord? What was the equivalent tool we used with Express?
-ActiveRecord if the M in MVC - which is the layer of the system responsible for representing business data and logic. The equivalent tool would be mongodb. 


What is a "migration"?
-Migration is a ruby class that are used to create simple and modify database tables

List at least one question you have about Rails (can go over 8 word max if needed).

- Are we useing SQLite 3 or PostgresSQL for our database?


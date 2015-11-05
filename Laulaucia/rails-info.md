
1. What is a strength of Rails (or something you like about Rails)?
  There are right ways to do things!

2. What is the name of the server Rails comes with, and what is the name of the database it comes with?
  WEBrick webserver & SQlite3 database

3. What is a "resource"?
  the CRUD operations available for a thing?

4. What is a "controller"? How is it different from a "route"? 
  a "go between" that handles more than routes

5. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
    in the node.JS file

6. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
  looks like an EJS index file
The app/controllers/articles_controller.rb file looks like:
  a class - or a schema file

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

7. What does the first line ArticlesController < ApplicationController mean?
    articles controller inherits properties from application controller

8. How does ArticlesController#new know which view to display?
    the show parameter?

9. Why does @article have that @?
  thats how you define things in a class in ruby

10. What is ActiveRecord? What was the equivalent tool we used with Express?
  active record seems like mongoose in express

11. What is a "migration"?
  a way to seed data and new models 

12. List at least one question you have about Rails (can go over 8 word max if needed).
how do i find templates like the blog template? How do i know if they are good to use?

Submission

After you write your short answers to the questions above in rails-info.md, follow normal submission procedures (git add, git commit, git push, pull request) to submit your answers.
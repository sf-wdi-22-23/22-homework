class UsersController < ApplicationController
# grab the users
	def index
		@users = User.all
		render :index
	end

# need to make a new user to pass to the form later
	def new
		@user = User.new
		render :new
	end

#  need to make a method for creating a new user
	def create
		user_params = params.require(:user).permit(:first_name, :last_name, :email, :password)
		@user = User.create(user_params)
		login(@user)
		redirect_to "/users/#{@user.id}"
	end
# need a show for users
	def show
		@user = User.find(params[:id])
		render :show
	end
# after user is signed up, they should be logged in

end

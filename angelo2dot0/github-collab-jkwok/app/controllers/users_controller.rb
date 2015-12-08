class UsersController < ApplicationController
	# grab the users
  def index
    @users = User.all
    render :index
  end
end

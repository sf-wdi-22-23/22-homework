require 'rails_helper'

RSpec.describe BreakfastController, type: :controller do |variable|
	before do
		user_params = Hash.new
		user_params[:first_name] = "Laura"
		user_params[:last_name] = "Evans"
		user_params[:password] = "Lion"
		current_user = User.create(user_params)
		session[:user_id] = current_user.id 
	end

	describe "#create" do
		context "success" do
			before do 
				@orders_count = Order.count
				post :create, order: {name: "Chicken tenders", quantity: "2"}
			end

			it "should add new order" do
				expect(Order.count).to eq(@orders_count +1)
			end

			it "should respond with 302 found" do
				expect(response.status).to be(302)
			end
		end

		context "failure" do
			before do 
				post :create, recipe: {name: nil, instructions: nil}
			end

			it "should respond with 302 found" do
				expect(response.status).to be(302)
			end

			it "should redirect to 'new order path'" do
				expect(response).to redirect_to(new_recipe_path)
			end

			it "should flash an error message" do
				expect(flash[:error]).to be_present
			end
		end
	end

end
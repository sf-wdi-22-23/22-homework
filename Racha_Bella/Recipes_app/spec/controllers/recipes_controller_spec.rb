require 'rails_helper'

RSpec.describe RecipesController, type: :controller do
	describe "#new" do
		before do
			current_user = FactoryGirl.create(:user)
		    session[:user_id] = current_user.id
		end

		it 'should respond with 200 status success' do
			expect(response.status).to be(200)
		end

		it 'should assign @recipe' do
			expect(assigns(:recipe)).to be_instance_of(Recipe)
		end

		it 'should render the :new view' do
			expect(response).to render_template(:new)
		end

	end

	describe "#create" do
		context "success" do
			before do
				@recipe_count = Recipe.count
				post :create, recipe: {name: "Kale Salad", instructions: "Toss kale with apples and walnuts."}
			end

			it 'should add new recipe' do
				expect(Recipe.count).to eq (@recipe_count +1)
			end

			it 'should respnd with 302 found' do
				expect(response.status).to be(302)
			end

			it 'should redirect to "recipe_path"' do 
				expect(response.location).to match(/\/recipes\/\d+/)
			end
		end

	end


end

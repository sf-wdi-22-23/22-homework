require 'rails_helper'

Rspec.describe RecipesController, type: :controller do 
	describe '#new' do
		before do
			current_user = FactoryGirl.create(:user)
			session[:user_id] = current_user.user_id
		end
		it 'should be 200 response' do
			expect(response.status).to be(200)
		end
		it 'should assign breakfast' do
			expect(assigns(:breakfast)).to be_instance_of(breakfast)
		end
		it 'should render new view' do
			expect(response).to render_template(:new)
		end	
	end

	describe '#create' do
		context 'success' do
			before do
				@breakfast_count = Breakfast.count
				post :create, breakfast: {name: 'muffin', instructions: 'bake until done'}
			end

			it 'should add and create a new Breakfast' do
				expect(Breakfast.count).to eq (@breakfast_count +1)
			end

			it 'should respnd with 302 found' do
				expect(response.status).to be(302)
			end

			it 'should redirect to "breakfast_path"' do 
				expect(response.location).to match(/\/breakfast\/\d+/) # example : /breakfast/28
			end
		end

	end

	describe "#edit" do
		before do
			current_user = FactoryGirl.create(:user)
		    session[:user_id] = current_user.id
		end

		it 'should respond with 200 status success' do
			expect(response.status).to be(200)
		end

		it 'should render an edit view' do
			expect(response).to render_template(:edit)
		end

	end










require 'rails_helper'

RSpec.describe RecipesController, type: :controller do
	describe "#new" do
		before do
			#creating a user and a current session , because it's the user who creates a breakfast
			current_user = FactoryGirl.create(:user)
		    session[:user_id] = current_user.id
		end

		it 'should respond with 200 status success' do
			expect(response.status).to be(200)
		end

		it 'should assign @breakfast' do
			expect(assigns(:breakfast)).to be_instance_of(Breakfast)
		end

		it 'should render the :new view' do
			expect(response).to render_template(:new)
		end

	end

	describe "#create" do
		context "success" do
			before do
				@breakfast_count = Breakfast.count
				post :create, breakfast: {name: "croissant", instructions: "butter croissant with half and half milk."}
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

		context 'failure' do
			before do
        		post :create, recipe: {name: nil, instructions: nil}
      		end

      		it "should respond with 302 found" do
      		 	expect(response.status).to be(302)
     		end

     		it "should redirect to 'new_breakfast_path'" do
       		    expect(response).to redirect_to(new_breakfast_path)
      		end

      		it "should flash an error message" do
       			expect(flash[:error]).to be_present
     		end
    	end
		
	end

	describe "#edit" do
		before do
			#creating a user and a current session , because it's the user who edits a breakfast
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

end

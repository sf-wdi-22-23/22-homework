#
# spec/controllers/breakfast_controller_spec.rb
#
require 'rails_helper'

RSpec.describe BreakfastController, type: :controller do

  ...

=begin
New Order testing (breakfast with some snazzy 80's music)
1. It should respond with an HTTP status code of 200
2. It should assign a new instance of Order in memory (allows us to use the form_for 
    syntax in the view)
3. It should render the new view (form to create a new order)
=end


  describe "#new" do
    before do
      get :new
    end

    it "should respond with 200 success" do
      expect(response.status).to be(200)
    end

    it "should assign @order" do
      expect(assigns(:order)).to be_instance_of(Order)
    end

    it "should render the :new view" do
      expect(response).to render_template(:new)
    end
  end




=begin
Test Create
1. When successful, it should add a new order to the database
2. When successful, it should respond with an HTTP status code of 302 (found, or redirected)
3. When successful, it should redirect to order_path (show page)
4. When fails, it should respond with an HTTP status code of 302 (found, or redirected)
5. When fails, it should redirect to new_order_path
6. When fails, it should flash an error message
=end


  describe "#create" do
    context "success" do
      before do
        @order_count = Order.count
        post :create, order: {name: "Pancakes", size: 4, sides:["syrup", "butter", "bacon"]}
      end

      it "should add new order" do
        expect(Order.count).to eq(@Order_count + 1)
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect_to 'order_path'" do
        expect(response.location).to match(/\/orders\/\d+/)
      end
    end

    context "failure" do
      before do
        post :create, order: {name: nil, size: nil}
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect to 'new_order_path'" do
        expect(response).to redirect_to(new_order_path)
      end

      it "should flash an error message" do
        expect(flash[:error]).to be_present
      end
    end
  end

end
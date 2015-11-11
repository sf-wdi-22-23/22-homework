require 'rails_helper'

RSpec.describe BreakfastDeliveryController, type: :controller do

  ...

  describe "#create" do
    context "success" do
      before do
        @orders_count = Order.count
        post :create, order: {name: "Matt Cowles", instructions: "Deliver to 255 Bush st."}
      end

      it "should add new order" do
        expect(Order.count).to eq(@orders_count + 1)
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
        post :create, order: {name: nil, instructions: nil}
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect to 'new_order_path'" do
        expect(response).to redirect_to(new_recipe_path)
      end

      it "should flash an error message" do
        expect(flash[:error]).to be_present
      end
    end
  end

end
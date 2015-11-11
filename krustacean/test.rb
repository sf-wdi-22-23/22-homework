require 'rails_helper'

# Picture you have a web app that allows people to order a hot breakfast to be delivered by quadcopter.
# This app has a BreakfastController that needs to be tested.
RSpec.describe BreakfastController, type: :controller do


  describe "#create" do
    context "success" do
      before do
        @breakfasts_count = Breakfast.count
        post :create, breakfast: {address: "225 Bush", order: "Sausage McMuffin"}
      end

      it "should add new order" do
        expect(Breakfast.count).to eq(@breakfasts_count + 1)
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect_to 'order submitted'" do
        expect(response.location).to match(/\/order\/\d+/)
      end
    end

    context "failure" do
      before do
        post :create, breakfast: {name: nil, instructions: nil}
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
  describe

end

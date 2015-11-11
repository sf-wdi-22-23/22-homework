#
# spec/controllers/breakfasts_controller_spec.rb
#
require 'rails_helper'

RSpec.describe BreakfastController, type: :controller do

  describe "#new" do
    before do
      get :new
    end

    it "should respond with 200 success" do
      expect(response.status).to be(200)
    end

    it "should assign @breakfast" do
      expect(assigns(:breakfast)).to be_instance_of(Breakfast)
    end

    it "should render the :new view" do
      expect(response).to render_template(:new)
    end
  end

end
RSpec.describe OrderController, type: :controller do
  before do
    order_params = Hash.new
    order_params[:address] = Faker::Name.address
    order_params[:email] = Faker::Name.email
    order_params[:contents] = Faker::Lorem.words(2).join
    order_params[:password] = Faker::Lorem.words(2).join
    # create and log in current_user
    current_order = Order.create(order_params)
    get :new

#I'll have basically one of these for every web page? For new show index etc. 
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

end
  end

Rails.application.routes.draw do
    root to: 'creatures#index'
    # We'll also use the resources method to have Rails 
    # make an index route for our creatures resource.
    resources :creatures
    #only: [:index, :new, :create, :show, :edit, :update, :destroy]
    # resources :creatures with :index is equivalent to adding:
    # get "/creatures", to: "creatures#index"
end
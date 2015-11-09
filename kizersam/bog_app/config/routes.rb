Rails.application.routes.draw do

  root to: "creatures#index"
  
  # We'll also use the resources method to have Rails 
    # make an index route for our creatures resource.
    resources :creatures
    # ^ same as resources :creatures, only: [:index, :new, :create, :show, :edit, :update, :destroy]
    # resources :creatures with :index is equivalent to adding:
    # get "/creatures", to: "creatures#index"
     # resources :creatures with :new is equivalent to adding:
    # get "/creatures/new", to: "creatures#new", as: "new_creature"
    # resources :creatures with :create is equivalent to adding:
    # post "/creatures", to: "creatures#create"
      # resources :creatures with :update is equivalent to adding BOTH:
    # patch "/creatures/:id", to: "creatures#update"
    # AND
    # put "/creatures/:id", to: "creatures#update"
end

Rails.application.routes.draw do
  root to: 'creatures#index'

  # We'll also use the resources method to have Rails 
  # make an index route for our creatures resource.
  resources :creatures, only: [:index, :new, :create, :show]
  # resources :creatures with :index is equivalent to adding:
  # get "/creatures", to: "creatures#index"

  # resources :creatures with :new is equivalent to adding:
  # get "/creatures/new", to: "creatures#new", as: "new_creature"

  # resources :creatures with :create is equivalent to adding:
  # post "/creatures", to: "creatures#create"

  # resources :creatures with :show is equivalent to adding:
  # get "/creatures/:id", to: "creatures#show", as: "creature"
end

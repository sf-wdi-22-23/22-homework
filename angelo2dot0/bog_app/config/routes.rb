Rails.application.routes.draw do

  root to: 'creatures#index'
  resources :creatures #, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  # ^ same as resources :creatures, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  # resources :creatures with :index is equivalent to adding:
    # get "/creatures", to: "creatures#index"
  # resources :creatures with :new is equivalent to adding:
    # get "/creatures/new", to: "creatures#new", as: "new_creature"
  # resources :creatures with :create is equivalent to adding:
    # post "/creatures", to: "creatures#create"
  # resources :creatures with :show is equivalent to adding:
    # get "/creatures/:id", to: "creatures#show", as: "creature"
  # resources :creatures with :edit is equivalent to adding:
    # get "/creatures/:id", to: "creatures#edit", as: "edit_creature"
  # resources :creatures with :update is equivalent to adding BOTH:
    # patch "/creatures/:id", to: "creatures#update"
    # AND
    # put "/creatures/:id", to: "creatures#update"
  # resources :creatures with :destroy is equivalent to adding:
    # delete "/creatures/:id", to: "creatures#destroy"
end


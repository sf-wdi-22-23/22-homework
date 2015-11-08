#/config/routes.rb

Rails.application.routes.draw do
    root to: 'creatures#index'

    resources :creatures, only: [:index, :new, :create, :show]
    # resources :creatures with :new is equivalent to adding:
    # get "/creatures/new", to: "creatures#new", as: "new_creature"
end
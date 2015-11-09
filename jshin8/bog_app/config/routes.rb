Rails.application.routes.draw do
  
  root to: 'creatures#index'
  # same as get "/" => "creature#index"

  resources :creatures, only: [:index, :new]
  # resources :creatures with :index is equivalent to adding:
  # get "/creatures/new", to: "creatures#new", as: "new_creature"

end

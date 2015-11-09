Rails.application.routes.draw do
  
  root to: 'creatures#index'
  # same as get "/" => "creature#index"

  resources :creatures, only: [:index]
  # resources :creatures with :index is equivalent to adding:
  # get "/creatures", to: "creatures#index"

end

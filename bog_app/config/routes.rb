# config routes for the thing
Rails.application.routes.draw do
  root to: "creatures#index"
  resources :creatures
  # resources :creatures, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  # get "/new" => "creatures#new"
end

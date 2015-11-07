# config routes for the thing
Rails.application.routes.draw do
  root to: "creatures#index"
  resources :creatures, only: [:index, :new, :create, :show, :edit, :update]
  # get "/new" => "creatures#new"
end

Rails.application.routes.draw do
 root to: 'creatures#index'

 # index route for creatures resource
 resources :creatures
 # resource :creatures, only: [:index, :new, :create, :show, :edit, :update, :destroy]


end

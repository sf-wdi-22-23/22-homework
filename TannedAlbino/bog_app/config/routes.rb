Rails.application.routes.draw do
 root to: 'creatures#index'

 # index route for creatures resource
 resource :creatures, only: [:index, :new, :create, :show]


end

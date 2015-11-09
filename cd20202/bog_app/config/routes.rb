Rails.application.routes.draw do
  
  root to: 'creatures#index'

  resources :creatures  #, only: [:index, :new, :create, :show, :edit, :update, :destroy]

  #get '/creatures' => 'creatures#index'
  #get '/creatures/new' => 'creature#new'
  #post '/creatures' => 'creatures#create'
  #get '/creatures/:id' => 'creatures#show'
  #get '/creatures/:id/edit' => 'creatures#edit'
  #put '/creatures/:id' => 'creatures#update'
  #delete '/creatures/:id' => 'creatures#destroy'

end

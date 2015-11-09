Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  root to: "creatures#index"

   #get '/creatures/:id' => "creatures#show", as: 'creature'
   #get '/creatures/new' => "creatures#new" , as:'creature'
   #post "/creatures", to: "creatures#create"
   resources :creatures #, only: [:index, :new, :create, :show, :edit , :update , :destroy]
   # root GET  /                        creatures#index
   # creature GET  /creatures/:id(.:format) creatures#show
#new_creature GET  /creatures/new(.:format) creatures#new
   #creatures GET  /creatures(.:format)     creatures#index
  # GET  /creatures/new(.:format) creatures#new


 
end

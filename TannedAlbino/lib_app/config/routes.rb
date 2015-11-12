Rails.application.routes.draw do
  # create routes for a user
  root to: "users#index"

  get"/users", to: "users#index", as: "users"

  get "/users/new", to: "users#new", as: "new_user"

# create route for new user
  post "/users", to: "users#create"
# once bcrypt set up and required for users
  get "/users/:id", to: "users#show"
# create routs for sign_in
  get "/sign_in", to: "sessions#new"

  post "/sessions", to: "sessions#create"

end


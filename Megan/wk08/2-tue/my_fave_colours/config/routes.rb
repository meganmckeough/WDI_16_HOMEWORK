Rails.application.routes.draw do
  # resources :colours

  # get '/bookmarks/new', to: 'bookmarks#new' #dont need this if you dont want
  post '/colours', to: 'colours#create'

  #read
  get '/colours', to: 'colours#index'
  get '/colours/:id', to: 'colours#show'

  #update
  get '/colours/:id/edit', to: 'colours#edit'
  put '/colours/:id', to: 'colours#update'

  #delete
  delete '/colours/:id', to: 'colours#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

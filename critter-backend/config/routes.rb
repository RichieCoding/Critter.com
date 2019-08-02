Rails.application.routes.draw do
  resources :quotes
  resources :likes
  resources :replies
  resources :thoughts
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

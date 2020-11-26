Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do 
    resources :users, only: %i[create]
    resources :sessions, only: %i[create delete]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

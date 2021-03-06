Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :project, only: %i[create edit index show destroy], defaults: { format: 'json' } do
    resources :stories, only: %i[create edit index show destroy], defaults: { format: 'json' } do
      resources :comments, only: %i[create edit index show destroy], defaults: { format: 'json'}
    end
  end
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: %i[create]
    resources :sessions, only: %i[create]
    match "sessions", to: "sessions#destroy", via: "delete", defaults: { id: nil }
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

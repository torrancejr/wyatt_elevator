Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check


  namespace :api do
    get 'current_user', to: 'current_user#index'
    resources :inquiries, only: [:index, :create]
  end
  # Defines the root path route ("/")
  root "home#home"

  get '*path', action: :home, controller: 'home'

  resources :maps
  post '/searches', to: 'searches#create'
  resources :inquiries, only: [:create]

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
end

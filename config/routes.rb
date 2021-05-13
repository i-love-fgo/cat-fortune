Rails.application.routes.draw do
  devise_for :users
  
  root to: 'fortunes#index'
  resources :users, only: :show
  resources :fortunes, only: :index
  resources :dailies, only: :index
  resources :bloodtypes, only: :index
  resources :zodiacs, only: :index
end
Rails.application.routes.draw do
  devise_for :users
  
  root to: 'fortunes#index'
  resources :fortunes, only: :index
  resources :dailies, only: [:index, :show]
  resources :bloodtypes, only: [:index, :show]
  resources :zodiacs, only: [:index, :show]
end
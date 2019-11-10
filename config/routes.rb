Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root to:  'groups#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update, :index] do
    resources :messages, only: [:index, :create]
  end
end

Rails.application.routes.draw do
  get 'get_all_users', to: 'secret_menu_items#get_all_users'
  post 'sign_up', to: 'secret_menu_items#sign_up'
  post 'sign_in', to: 'secret_menu_items#sign_in'
  resources :secret_menu_items, only: [:index, :show, :create, :update, :destroy]
end

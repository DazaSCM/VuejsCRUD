Rails.application.routes.draw do
  get 'get_all_users', to: 'secret_menu_items#get_all_users'
  post 'sign_up', to: 'secret_menu_items#sign_up'
  post 'sign_in', to: 'secret_menu_items#sign_in'
  get 'get_deleted_users', to: 'secret_menu_items#get_deleted_users'
  delete 'soft_delete/:id', to: 'secret_menu_items#soft_delete'
  get 'restore/:id', to: 'secret_menu_items#restore'
  delete 'permanent_delete/:id', to: 'secret_menu_items#permanent_delete'
  resources :secret_menu_items, only: [:index, :show, :create, :update, :destroy]
end

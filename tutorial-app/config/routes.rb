Rails.application.routes.draw do
  resources :tutorials
  delete 'tutorials', to: 'tutorials#destroy_all'
  get 'search', to: 'tutorials#find_by_title'
end

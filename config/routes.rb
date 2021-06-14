Rails.application.routes.draw do
  root to: 'pages#accueil'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'accueil', to: 'pages#accueil'
  get 'but', to: 'pages#but'
  get 'formation_stid', to: 'pages#formation_stid'
  get 'travaux_eleves', to: 'pages#travaux_eleves'
end

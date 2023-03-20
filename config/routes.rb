Rails.application.routes.draw do
  root to: "translations#home"

  resources :translations, only: %i[create edit update destroy]

end

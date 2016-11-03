Rails.application.routes.draw do

  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :essays, only: [:index, :show]
    end
  end

  get "/:id", to: "essays#show", as: :essay

end

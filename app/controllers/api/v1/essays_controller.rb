class Api::V1::EssaysController < ApplicationController

  def index
    @essays = Essay.order(created_at: :desc).limit(10)
    render json: @essays
  end

  def show
    @essay = Essay.find_by(slug: params[:id])
    render json: @essay
  end

end

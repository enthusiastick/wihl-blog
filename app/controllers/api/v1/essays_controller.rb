class Api::V1::EssaysController < ApplicationController

  def index
    render json: Essay.all
  end

  def show
    @essay = Essay.find_by(slug: params[:id])
    render json: @essay
  end

end

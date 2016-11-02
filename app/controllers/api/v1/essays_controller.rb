class Api::V1::EssaysController < ApplicationController

  def index
    render json: Essay.all
  end

  def show
    render json: Essay.find_by(slug: params[:id])
  end

end

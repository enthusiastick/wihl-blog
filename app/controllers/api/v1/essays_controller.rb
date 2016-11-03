class Api::V1::EssaysController < ApplicationController

  def index
    render json: Essay.all
  end

  def show
    @essay = Essay.find_by(slug: params[:id])
    if @essay.present?
      render json: @essay
    else
      render json: @essay, status: :not_found
    end
  end

end

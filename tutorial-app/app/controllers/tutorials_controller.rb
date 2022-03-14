class TutorialsController < ApplicationController
  def index
    @tutos = Tuto.all
    render json: @tutos
  end

  def show 
    @tuto = Tuto.find(params[:id])
    render json: @tuto
  end

  def create
    @tuto = Tuto.create(
      title: params[:title],
      description: params[:description],
      status: false
    )
    render json: @tuto
  end

  def update
    @tuto = Tuto.find(params[:id])
    @tuto.update(
      title: params[:title],
      description: params[:description],
      status: params[:published]
    )
    render json: @tuto
  end

  def destroy
    @tuto = Tuto.find(params[:id])
    @tuto.destroy
    @tutos = Tuto.all
    render json: @tutos
  end

  def destroy_all
    Tuto.delete_all
  end

  def find_by_title
    @tuto = Tuto.where(title: params[:title])
    render json: @tuto
  end
end

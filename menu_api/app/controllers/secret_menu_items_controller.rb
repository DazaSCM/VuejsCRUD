class SecretMenuItemsController < ApplicationController

  def get_all_users
    @users = User.all
    render json: @users
  end

  def sign_up 
    @user = User.create(
      email: params[:email],
      password: params[:password]
    )
    render json: @user
  end

  def sign_in
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
    end
  end

  def index
    @secretMenuItems = SecretMenuItem.all 
    render json: @secretMenuItems
  end
  
  def show
    @secretMenuItem = SecretMenuItem.find(params[:id])
    render json: @secretMenuItem
  end
  
  def create 
    @secretMenuItem = SecretMenuItem.create(
      menu_name: params[:menu_name],
      restaurant_name: params[:restaurant_name],
      menu_description: params[:menu_description]
    )
    render json: @secretMenuItem
  end

  def update 
    @secretMenuItem = SecretMenuItem.find(params[:id])
    @secretMenuItem.update(
      menu_name: params[:menu_name],
      restaurant_name: params[:restaurant_name],
      menu_description: params[:menu_description]
    )
    render json: @secretMenuItem
  end

  def destroy
    @secretMenuItems = SecretMenuItem.all 
    @secretMenuItem = SecretMenuItem.find(params[:id])
    @secretMenuItem.destroy
    render json: @secretMenuItems
  end

end

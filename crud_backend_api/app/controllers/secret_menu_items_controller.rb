class SecretMenuItemsController < ApplicationController
  before_action :authorize_request, except: [:sign_in, :sign_up]

  def get_all_users
    @users = User.all
    render json: @users, methods: [:image_url]
  end

  def get_deleted_users
    @users = User.only_deleted
    render json: @users, status: :ok
  end

  def sign_up 
    @user = User.create(
      email: params[:email],
      password: params[:password],
      image: params[:image]
    )
    render json: @user, methods: [:image_url]
  end

  def sign_in
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                     username: @user.email }, status: :ok
    else
      render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
    end
  end

  def soft_delete
    @user = User.find(params[:id])
    @user = @user.destroy
    render json: @user, status: :ok
  end

  def restore
    @users = User.only_deleted
    @user = User.restore(params[:id])
    render json: @users
  end

  def permanent_delete
    @users = User.all
    @user = User.find(params[:id])
    @user = @user.really_destroy!
    render json: @users, status: :ok
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

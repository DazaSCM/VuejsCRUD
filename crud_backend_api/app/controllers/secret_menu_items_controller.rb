class SecretMenuItemsController < ApplicationController
  before_action :authorize_request, except: [:sign_in, :sign_up, :destroy]

  def get_all_users
    @users = User.all
    render json: @users, methods: [:image_url]
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

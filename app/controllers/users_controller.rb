class UsersController < ApplicationController


  def show
  end
  
  private
  def user_params
    params.require(:user).permit(:nickname, :email, :favorite_cat, :image)
  end
end

class UsersController < ApplicationController

  def user_params
    params.require(:user).permit(:nickname, :email, :favorite_cat, :image)
  end
end

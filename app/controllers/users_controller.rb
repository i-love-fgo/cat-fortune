class UsersController < ApplicationController
  # before_action user_params

  def show
    user = User.find(params[:id])
    @user.nickname = current_user.nickname
    @user.profile_img = current_user.profile_img
    @user.favorite_cat = current_user.favorite_cat
  end
end

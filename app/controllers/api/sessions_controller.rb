class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user && login(@user)
      render template: 'api/users/show'
    else
      render json: { error: 'Incorrect credentials.'}
    end
  end

  def destroy
    logout
    render json: { success: 'Successfully logged out.'}
  end

  private 

  def session_params
    params.require(:user).permit(:username, :password)
  end
end

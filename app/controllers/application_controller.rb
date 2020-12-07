class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user, :logout, :login, :logged_in?


  def current_user 
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout
    session[:session_token] = nil
    if current_user
      current_user.reset_session_token
    end
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end

  def logged_in?
    !!current_user
  end
end

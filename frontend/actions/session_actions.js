import * as types from '../constants/action_types'
import * as SessionAPIUtil from '../util/session_api_util'

export const receiveCurrentUser = (user) => ({
  type: types.RECEIVE_CURRENT_USER,
  user
})

export const logoutCurrentUser = () => ({
  type: types.LOGOUT_CURRENT_USER,
})

export const receiveErrors = (errors) => ({
  type: types.RECEIVE_ERRORS,
  errors
})

export const startLoading = () => ({
  type: types.START_LOADING
})

export const login = (user) => dispatch => {
  dispatch(startLoading())
  SessionAPIUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)))
}

export const signup = (user) => dispatch =>{ 
  dispatch(startLoading())
  SessionAPIUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)))
}

export const logout = () => dispatch => {
  dispatch(startLoading())
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
}

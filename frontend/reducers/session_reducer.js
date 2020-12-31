import * as types from '../constants/action_types'

const SessionReducer = (state = {}, action) => {
  switch(action.type){
    case types.RECEIVE_CURRENT_USER:
      return action.user
    case types.LOGOUT_CURRENT_USER:
      return {}
    default:
      return {}
  }
}

export default SessionReducer;
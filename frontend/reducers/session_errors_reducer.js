import * as types from '../constants/action_types'

const SessionErrorsReducer = (state = {}, action) => {
  switch(action.type) {
    case types.RECEIVE_SESSION_ERRORS:
      return action.errors
    case types.RECEIVE_CURRENT_USER:
      return {}
    default: 
      return state
  }
}

export default SessionErrorsReducer
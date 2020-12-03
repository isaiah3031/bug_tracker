import * as types from '../constants/action_types'

const UsersReducer = (state = {}, action) => {
  switch(action.type) {
    case types.RECEIVE_CURRENT_USER:
      return action.user
    default: 
      return {}
  }
}

export default UsersReducer
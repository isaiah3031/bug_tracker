import * as types from '../constants/action_types'

const LoadingReducer = (state = {}, action) => {
  let type = action.type
  if (type.includes('RECEIVE_')){
    type = 'RECEIVE_'
  }

  switch (type) {
    case types.START_LOADING:
      return true;
    case ('RECEIVE_'):
      return false;
    default: 
      return state;
  }
}
export default LoadingReducer
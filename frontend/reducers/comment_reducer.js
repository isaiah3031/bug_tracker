import * as types from '../constants/action_types'

const CommentReducer = (state = {}, action) => {
  switch (action.type) {
    case (types.RECEIVE_COMMENTS):
      return action.comments
    case (types.RECEIVE_COMMENT):
      return action.comment
    case (types.REMOVE_COMMENT):
      let newState = Object.assign({}, state)
      delete newState[action.comment.id]
      return newState
    default:
      return state;
  }
}

export default CommentReducer;
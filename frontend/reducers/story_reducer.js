import * as types from '../constants/action_types'

const StoryReducer = (state = {}, action) => {
  switch (action.type) {
    case (types.RECEIVE_STORIES):
      return action.stories
    case (types.RECEIVE_STORY):
      return action.story
    default:
      return state;
  }
}

export default StoryReducer
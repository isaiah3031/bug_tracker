import * as types from '../constants/action_types'

const StoryReducer = (state = {}, action) => {
  switch (action.type) {
    case (types.RECEIVE_STORIES):
      return action.stories
    case (types.RECEIVE_STORY):
      return action.story
    case (types.REMOVE_STORY):
      let newState = Object.assign({}, action.story)
      delete newState[action.story.id]
      return newState
    default:
      return state;
  }
}

export default StoryReducer
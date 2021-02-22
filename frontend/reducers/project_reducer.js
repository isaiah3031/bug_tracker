import * as types from '../constants/action_types'

const ProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case (types.RECEIVE_PROJECTS):
      return action.projects
    case (types.RECEIVE_PROJECT):
      return action.project
    case (types.REMOVE_PROJECT):
      let newState = Object.assign({}, state)
      delete newState[action.projectId]
      return newState
    default: 
      return state;
  }
}

export default ProjectReducer;
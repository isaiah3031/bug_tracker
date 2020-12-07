import * as types from '../constants/action_types'

const ProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case (types.RECEIVE_PROJECTS):
      return action.projects
    case (types.RECEIVE_PROJECT):
      return action.project
    default: 
      return state;
  }
}

export default ProjectReducer;
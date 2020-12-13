import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import ProjectReducer from './project_reducer'
import StoryReducer from './story_reducer'

const entitiesReducer = combineReducers({
  users: UsersReducer,
  projects: ProjectReducer,
  stories: StoryReducer
})

export default entitiesReducer;
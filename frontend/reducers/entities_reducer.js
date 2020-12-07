import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import ProjectReducer from './project_reducer'
const entitiesReducer = combineReducers({
  users: UsersReducer,
  projects: ProjectReducer
})

export default entitiesReducer;
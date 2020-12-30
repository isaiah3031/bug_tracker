import * as types from '../constants/action_types'
import * as ProjectAPI from '../util/project_api_util'

export const receiveProjects = (projects) => ({
  type: types.RECEIVE_PROJECTS,
  projects
})

export const receiveProject = (project) => ({
  type: types.RECEIVE_PROJECT,
  project
})

export const startLoading = () => ({
  type: types.START_LOADING
})

export const fetchProjects = () => dispatch =>{
  dispatch(startLoading())
  ProjectAPI.fetchProjects().then(projects =>
    dispatch(receiveProjects(projects))
  )
}

export const fetchProject = (projectId) => dispatch =>{
  dispatch(startLoading())
  ProjectAPI.fetchProject(projectId).then(project =>
    dispatch(receiveProject(project))
  )
}

export const createProject = (project) => dispatch => {
  dispatch(startLoading())
  ProjectAPI.createProject(project).then(project =>
    dispatch(receiveProject(project))  
  )
}

export const editProject = (project, projectId) => dispatch => {
  dispatch(startLoading())
  ProjectAPI.editProject(project, projectId).then(project =>
    dispatch(receiveProject(project))
  )
}
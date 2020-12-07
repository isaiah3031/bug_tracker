import ProjectReducer from '../../reducers/project_reducer'
import * as types from '../../constants/action_types'

describe('project reducer', () => {
  it('should return the initial state when passed an unfamiliar type', () => {
    expect(ProjectReducer({}, { type: undefined })).toEqual({})
  })

  it('should handle RECEIVE_PROJECTS', () => {
    let projects = {name: 'project1'}
    expect(ProjectReducer({}, { 
      type: types.RECEIVE_PROJECTS, 
      projects: projects
    })).toEqual(projects)
  })

  it('should handle RECEIVE_PROJECT', () => {
    let project = {name: 'project1'}
    expect(ProjectReducer({}, {
      type: types.RECEIVE_PROJECT,
      project: project
    })).toEqual(project)    
  })
})
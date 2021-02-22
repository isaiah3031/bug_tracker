export const createProject = (name) => 
  $.ajax({
    type: 'POST',
    url: '/project',
    data: { project: { name: name } } 
  })  

export const fetchProjects = () => 
  $.ajax({
    type: 'GET',
    url: '/project'
  })

export const editProject = (name, projectId) => 
  $.ajax({
    type: 'GET',
    url: `/project/${projectId}/edit`,
    data: { project: { name: name } }
  })

export const fetchProject = (projectId) =>
  $.ajax({
    type: 'GET',
    url: `/project/${projectId}`
  })

export const deleteProject = (projectId) =>
  $.ajax({
    type: 'DELETE',
    url: `/project/${projectId}`
  })
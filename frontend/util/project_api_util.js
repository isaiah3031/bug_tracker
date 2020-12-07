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
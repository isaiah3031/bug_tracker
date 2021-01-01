import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import ToggleNewForm from '../story/toggle_new_form'
import LoadingIcon from '../loading_icon'

const ProjectList = (props) => {
  useEffect(() => {
    props.fetchProjects();
    }, [])

  const showProject = (projectId) => {
    props.history.push(`/projects/${projectId}`)
  }

  const { projects } = props
  
  if (props.loading) { return <LoadingIcon />; }

  return (
    <ul className='project-list'>
      <h2>Projects</h2>
      {Object.values(projects).map(project => {
        return <li key={project.id} onClick={() => showProject(project.id)}>
          {project.name}
        </li>
      }
    )}
    </ul>
  )
}

export default withRouter(ProjectList)
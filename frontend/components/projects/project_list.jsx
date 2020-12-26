import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import ToggleNewForm from '../story/toggle_new_form'
const ProjectList = (props) => {
  useEffect(() => {
    props.fetchProjects();
    }, [])

  const showProject = (projectId) => {
    props.history.push(`/projects/${projectId}`)
  }

  const { projects } = props
  return (
    <ul className='project-list'>
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
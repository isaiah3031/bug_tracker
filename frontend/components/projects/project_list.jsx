import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom'
import ToggleNewForm from '../story/toggle_new_form'
import LoadingIcon from '../loading_icon'
import ArrowIcon from 'images/arrow_icon.png'

const ProjectList = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  useEffect(() => {
    props.fetchProjects();
  }, [])

  const showProject = (projectId) => {
    props.history.push(`/projects/${projectId}`)
  }

  const projectDropDown = () => <>
    {Object.values(projects).map(project => {
      return (
        <li
          className='hover-highlight'
          key={project.id}
          onClick={() => showProject(project.id)}>
          {project.name}
        </li>
      )
    }
    )}
  </>

  const { projects } = props

  if (props.loading) { return <LoadingIcon />; }

  return <div className='project-sidemenu'>
    <h2>Choose a Project</h2>
    {projectDropDown()}
    <Link className='hover-highlight' to='projects/new'>
      <p>Create A New Project</p>
    </Link>
  </div>
}

export default withRouter(ProjectList)
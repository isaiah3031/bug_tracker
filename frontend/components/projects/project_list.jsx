import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom'
import LoadingIcon from '../loading_icon'

const ProjectList = ({ projects, loading, fetchProjects, history }) => {
  useEffect(() => {
    fetchProjects();
  }, [])

  const showProject = (projectId) => {
    history.push(`/projects/${projectId}`)
  }

  const projectDropDown = () => (
    !projects && null ||
    Object.values(projects).map(project =>
      <li
        className='hover-highlight'
        key={project.id}
        onClick={() => showProject(project.id)}>
        {project.name}
      </li>
    )
  )

  if (loading) { return <LoadingIcon />; }

  return <div className='project-sidemenu'>
    <h2>Choose a Project</h2>
    {projectDropDown()}
    <Link className='hover-highlight' to='projects/new'>
      <p>Create A New Project</p>
    </Link>
  </div>
}

export default withRouter(ProjectList)
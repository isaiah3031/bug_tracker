import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom'
import LoadingIcon from '../loading_icon'
import ProjectIcon from '../../../app/assets/images/projects_icon.svg'
import PlusIcon from '../../../app/assets/images/plus_sign.png'

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
    <h2 className='list-title'><img className='icon' src={ProjectIcon} />Projects</h2>
    {projectDropDown()}
    <Link className='hover-highlight' to='projects/new'>
      <h2><img className='icon' src={PlusIcon} />New Project</h2>
    </Link>
  </div>
}

export default withRouter(ProjectList)
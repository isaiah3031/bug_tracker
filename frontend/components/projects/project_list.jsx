import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import ToggleNewForm from '../story/toggle_new_form'
import LoadingIcon from '../loading_icon'

const ProjectList = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  
  useEffect(() => {
    props.fetchProjects();
    }, [])

  const showProject = (projectId) => {
    props.history.push(`/projects/${projectId}`)
  }

  const { projects } = props
  
  if (props.loading) { return <LoadingIcon />; }

  return (
    <>
    <div className='project-bar'
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <h2>Choose a Project</h2>
      <ul className={hovered ? 'project-list' : 'hidden'}t>
        {Object.values(projects).map(project => {
          return <li key={project.id} onClick={() => showProject(project.id)}>
            {project.name}
          </li>
          }
        )}
      </ul>
    </div>
    <div className='welcome-msg-container'>
      <div className='welcome-msg'>
        <h1>Welcome to BugHunter!</h1>
        <p>
          You must Login or Sign up before you can view bugs
        </p>
        <p>  
          Choose or create a project from the dropdown in the top left corner.
        </p>
        <p>
              You can only edit the bugs on  aproject you have created or that you have admin rights over.
        </p>
        <p>
          Once viewing bugs for a project, you can drag and drop them to change their priority.
        </p>
      </div>
      </div>
    </>
  )
}

export default withRouter(ProjectList)
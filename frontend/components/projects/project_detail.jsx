import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import StoryListContainer from '../story/story_list_container'
import ToggleNewForm from '../story/toggle_new_form'

const ProjectDetail = (props) => {
  useEffect(() => {
    let projectId = props.match.params.projectId
    props.fetchProject(projectId)
  }, [])

  const renderForm = (formType) => {
    switch (formType){
      case 'edit':
        props.history.push(`/projects/${currentProject.id}/edit`)
      case 'new':
        props.history.push(`/projects/new`)
    }
  }

    let currentProject = props.project
    
    return (
      <div>
        <button onClick={() => renderForm('edit')}>
          Edit Project
        </button>
        <button onClick={() => renderForm('new')}>
          New Project
        </button>
        <h2 className='project-name'>
          {currentProject.name}
          <ToggleNewForm projectId={props.match.params.projectId}/>
        </h2>
        <StoryListContainer />
      </div>
    )
}

export default withRouter(ProjectDetail)
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
        <div className='project-bar'>
          <h2>{currentProject.name}

          </h2>
        </div>
        <StoryListContainer className='main-content'/>
      </div>
    )
}

export default withRouter(ProjectDetail)
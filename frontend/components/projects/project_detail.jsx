import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import StoryListContainer from '../story/story_list_container'

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let projectId = this.props.match.params.projectId
    this.props.fetchProject(projectId)
  }

  renderForm(formType){
    switch (formType){
      case 'edit':
        this.props.history.push(`/projects/${currentProject.id}/edit`)
      case 'new':
        this.props.history.push(`/projects/new`)
    }
  }

  render() {
    let currentProject = this.props.project
    return (
      <div>
        <button onClick={() => this.renderForm('edit')}>
          Edit Project
        </button>
        <button onClick={() => this.renderForm('new')}>
          New Project
        </button>
        <h2>{currentProject.name}</h2>
        <StoryListContainer />
      </div>
    )
  }
}

export default withRouter(ProjectDetail)
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

  render() {
    let currentProject = this.props.project
    return (
      <div>
        <button onClick={() => {
          this.props.history.push(`/projects/${currentProject.id}/edit`)
        }}>Edit Project</button>
        <button onClick={() => {
          this.props.history.push(`/projects/new`)
        }}>New Project</button>

        <h2>{currentProject.name}</h2>
        <StoryListContainer />
      </div>
    )
  }
}

export default withRouter(ProjectDetail)
import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import EditProjectFormContainer from './edit_project_form_container'

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
      </div>
    )
  }
}

export default withRouter(ProjectDetail)
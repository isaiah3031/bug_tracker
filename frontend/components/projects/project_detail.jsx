import React from 'react'
import { withRouter } from 'react-router-dom'

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    let projectId = this.props.match.params.projectId
    this.props.fetchProject(projectId)
  }
  
  render() {
    let project = this.props.project
    return (
      <h2>{project.name}</h2>
    )
  }
}

export default withRouter(ProjectDetail)
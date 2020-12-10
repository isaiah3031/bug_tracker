import React from 'react';
import { withRouter } from 'react-router-dom'

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchProjects();
  }

  showProject(projectId) {
    this.props.history.push(`/projects/${projectId}`)
  }

  render() {
    let projects = this.props.projects;
    return (
      <ul className='project-list'>
        {Object.values(projects).map(project => {
          return <li key={project.id} onClick={() => this.showProject(project.id)}>{project.name}</li>
        }
      )}
      </ul>
    )
  }
}

export default withRouter(ProjectList)
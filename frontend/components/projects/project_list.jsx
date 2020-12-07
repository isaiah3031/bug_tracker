import React from 'react';

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    let projects = this.props.projects;
    return (
      <ul id='projectList'>
        {Object.values(projects).map(project => <li>{project.name}</li>)}
      </ul>
    )
  }
}

export default ProjectList
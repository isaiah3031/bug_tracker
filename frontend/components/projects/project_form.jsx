import React from 'react'

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  currentProjectId() {
    return this.props.match.params.projectId
  }

  componentWillMount() {
    if (this.props.formType == 'Edit Project') {
      this.props.fetchProject(this.currentProjectId()).then(() => {
        this.setState({
          name: this.props.projects.name
        })
      })

    }
  }

  handleChange() {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitForm() {
    if (this.props.formType == 'Edit Project') {
      this.props.processForm(this.state.name, this.currentProjectId()).then(() => {

        this.props.history.push(`/projects/${this.currentProjectId()}`)
      })
    } else {
      this.props.processForm(this.state.name)
    }
    
  }

  render() {
    return (
      <form>
        <label>Name:
          <input 
            id='name' 
            onChange={() => this.handleChange()}
            value={this.state.name}/>
        </label>
        <button onClick={() => this.submitForm()}>Submit</button>
      </form>
    )
  }
}

export default ProjectForm
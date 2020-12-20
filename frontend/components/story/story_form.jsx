import React from 'react'

class StoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.setFormDefaults()
  }

  setFormDefaults() {
    if (this.props.formType == 'new') {
      this.emptyState();
    } else {
      this.inheritState();
    }
  }

  emptyState() {
    this.state = {
      title: '',
      description: '',
      story_type: 'bug',
      iteration: 'icebox',
      complexity: '-1',
      status: '',
      priority: -1,
      project_id: this.props.projectId,
      author_id: this.props.currentUser
    }
  }

  inheritState() {
    let story = this.props.story
    this.state = {
      title: story.title,
      description: story.description,
      story_type: story.story_type,
      iteration: story.iteration,
      complexity: story.complexity,
      status: story.status,
      project_id: story.project_id,
      priority: story.priority,
      author: this.props.currentUser,
      id: story.id
    }
  }

  handleChanges() {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  
  handleSubmit() {
    event.preventDefault()
    this.props.processForm(this.state)
    location.reload()
  }

  render() {
    return (
      <form>
        <label> Title:
          <input 
            id='title'
            value={this.state.title}
            onChange={() => this.handleChanges()}
          />
        </label>
        <label> Description:
          <input 
            id='description'
            value={this.state.description}
            onChange={() => this.handleChanges()}
          />
        </label>
        <label> Type:
          <select 
            id='story_type'
            value={this.state.story_type}
            onChange={() => this.handleChanges()}>
            <option value='bug' selected="selected">bug</option>    
            <option value='feature'>feature</option>
          </select>
        </label>
        <label> Iteration:
          <select 
            id='iteration'
            value={this.state.iteration}
            onChange={() => this.handleChanges()}>
            <option value='current'>current</option>    
            <option value='backlog'>backlog</option>
            <option  value='icebox' selected="selected">icebox</option>
          </select>
        </label>
        <label> Complexity:
          <select 
            id='complexity'
            value={this.state.complexity}
            onChange={() => this.handleChanges()}>
            <option value='-1' selected="selected">unestimated</option>    
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
        </label>
        <label> Status:
          <select 
            id='status'
            value={this.state.status}
            onChange={() => this.handleChanges()}>
            <option value='' selected="selected">not started</option>    
            <option value='in_progress'>In Progress</option>
            <option value='finished'>finished</option>
          </select>
        </label>
        <label> Priority:
          <select 
            id='priority'
            value={this.state.priority}
            onChange={() => this.handleChanges()}>
            <option value='1' selected="selected">1</option>    
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </label>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    )
  }
}

export default StoryForm
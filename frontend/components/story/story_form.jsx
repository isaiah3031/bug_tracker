import React from 'react'

class StoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
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
    this.setState({
      description: '',
      story_type: 'bug',
      iteration: 'icebox',
      complexity: '-1',
      project_id: this.props.projectId,
      author_id: this.props.currentUser
    })
  }

  inheritState() {
    let story = this.props.story
    this.setState({
      description: story.description,
      story_type: story.story_type,
      iteration: story.iteration,
      complexity: story.complexity,
      project_id: story.project_id,
      priority: story.priority,
      author_id: this.props.currentUser,
      id: story.id
    })
  }

  handleChanges() {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  
  handleSubmit() {
    event.preventDefault()
    this.props.processForm(this.state).then(() =>
      this.props.fetchStories(this.state.project_id)
    )
    this.setFormDefaults()
  }

  render() {
    return (
      <form className='story-form'>
        <label className='select-label'> Type:
          <select 
            id='story_type'
            value={this.state.story_type}
            onChange={() => this.handleChanges()}>
            <option value='bug' value="selected">bug</option>    
            <option value='feature'>feature</option>
          </select>
        </label>
        <label className='select-label'> Iteration:
          <select 
            id='iteration'
            value={this.state.iteration}
            onChange={() => this.handleChanges()}>
            <option value='current'>current</option>    
            <option value='backlog'>backlog</option>
            <option  value='icebox' value="selected">icebox</option>
          </select>
        </label>
        <label className='select-label'> Complexity:
          <select 
            id='complexity'
            value={this.state.complexity}
            onChange={() => this.handleChanges()}>
            <option value='-1' value="selected">unestimated</option>    
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
        </label>
        <label className='input-label'> Description:</label>
        <textarea
          id='description'
          value={this.state.description}
          onChange={() => this.handleChanges()}>
        </textarea> 
        <label className='select-label'> Priority:
          <input 
            type='text'
            id='priority'
            value={this.state.priority}
            onChange={() => this.handleChanges()}/>
        </label>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    )
  }
}

export default StoryForm
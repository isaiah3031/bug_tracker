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
        {this.props.formType === 'new' ? (
          <div className='new-story-header'>
            <h1>New Story</h1>
            <p>Add a new story to an iteration list</p>
          </div>
        ) : ''}
        <label>Is this story a bug or a feature?</label>
        <div className='radio-header'>    
          <label className='radio-item'>
            <input type='radio' 
              value='bug'
              id='story_type'
              onChange={() => this.handleChanges()}
              checked={this.state.story_type === 'bug'}/>Bug
            </label>    
          <label className='radio-item'>
            <input type='radio' 
              value='feature'
              id='story_type'
              onChange={() => this.handleChanges()}
              checked={this.state.story_type === 'feature'}/>Feature
          </label>
        </div>
        <label>Which iteration does it belong to?</label>
        <div className='radio-header'>
          <label className='radio-item'>
            <input type='radio' 
            value='current'
            id='iteration'
            onChange={() => this.handleChanges()}
            checked={this.state.iteration === 'current'}/>Current   
          </label>
          <label className='radio-item'>
            <input type='radio' 
            value='backlog'
            id='iteration'
            checked={this.state.iteration === 'backlog'}
            onChange={() => this.handleChanges()}
            />Backlog
           </label>
          <label className='radio-item'>
            <input type='radio' 
            value='icebox'
            id='iteration'
            onChange={() => this.handleChanges()}
            checked={this.state.iteration === 'icebox'}/>Icebox
          </label>
          <label className='radio-item'>
            <input type='radio' 
            value='finished'
            id='iteration'
            onChange={() => this.handleChanges()}
            checked={this.state.iteration === 'finished'}/>Finished
          </label>
        </div>
        <label className='select-label'> Complexity
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
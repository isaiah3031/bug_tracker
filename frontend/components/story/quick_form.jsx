import React from 'react'

// Creates buttons for stories in the current or backlog iterations quickly change
// their iterations from backlog to current, or current to finished.
class QuickForm extends React.Component {
  constructor(props) {
    super(props)
    this.setDefaultState()
  }

  setDefaultState() {
    let {iteration} = this.props.story
    if (iteration == 'backlog') {
      this.autofillCurrentForm()
    } else if (iteration == 'current') {
      this.autofillFinishForm()
    }
  }
  autofillCurrentForm() {
    const {story: {description, story_type, complexity, project_id, priority, id } } = this.props
    this.state = {
      description: description,
      story_type: story_type,
      iteration: 'current',
      complexity: complexity,
      project_id: project_id,
      priority: priority,
      assigned_to: this.props.currentUser.id,
      id: id
    }
  }

  autofillFinishForm() {
    const {story: {description, story_type, complexity, project_id, priority, id } } = this.props
    this.state = {
      description: description,
      story_type: story_type,
      iteration: 'finished',
      complexity: complexity,
      project_id: project_id,
      priority: priority,
      id: id
    }
  }

  // will submit the form accordingly depending on the iteration passed to it.
  handleSubmit() {
    this.props.processForm(this.state).then(() =>
      this.props.fetchStories(this.props.story.project_id)
    )
  }

  handleText() {
    let {iteration} = this.props.story
    if (iteration == 'backlog') {
      return 'Start'
    } else if (iteration == 'current') {
      return 'Finish'
    }
  }
  
  render() {
    if (this.props.story.iteration == 'icebox' || this.props.story.iteration == 'finished') {
      return null
    } else {
      return <button onClick={() => this.handleSubmit()}>{this.handleText()}</button>
    }
  }
}

export default QuickForm
import React from 'react'

// Should also assign projects to users when starting a project.
class QuickForm extends React.Component {
  constructor(props) {
    super(props)
  }

  autofillCurrentForm() {
    let story = this.props.story
    return ({
      title: story.title,
      description: story.description,
      story_type: story.story_type,
      iteration: 'current',
      complexity: story.complexity,
      status: story.status,
      project_id: story.project_id,
      priority: story.priority,
      assigned_to: this.props.currentUser.id,
      id: story.id
    })
  }

  autofillFinishForm() {
    let story = this.props.story
    return ({
      title: story.title,
      description: story.description,
      story_type: story.story_type,
      iteration: 'icebox',
      complexity: story.complexity,
      status: story.status,
      project_id: story.project_id,
      priority: story.priority,
      id: story.id
    })
  }

  // will submit the form accordingly depending on the iteration passed to it.
  handleSubmit() {
    if (this.props.story.iteration == 'backlog') {
      this.props.processForm(this.autofillCurrentForm())
    } else {
      this.props.processForm(this.autofillFinishForm())
    }
    location.reload()
  }

  handleText() {
    if (this.props.story.iteration == 'backlog') {
      return 'Start'
    } else {
      return 'Finish'
    }
  }
  render() {
    if (this.props.story.iteration == 'icebox') {
      return null
    } else {
      return <button onClick={() => this.handleSubmit()}>{this.handleText()}</button>
    }
  }
}

export default QuickForm
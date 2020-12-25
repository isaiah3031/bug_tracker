import React from 'react'
import EditStoryFormContainer from './edit_story_form_container'
import CommentListContainer from '../comments/comment_list_container'

class StoryDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false
    }
  }

  toggleForm() {
    this.setState((state) => ({editForm: !state.editForm}))
  }

  // Maybe it would make more sense for this to eventually be a container.
  // This would remove lines 35 to 42
  render() {
    const {
      selectedStory, 
      story,
      story: { 
        id, 
        description,
        story_type,
        iteration,
        complexity,
        status,
        priority,
        assigned_to
      }} = this.props
    if (selectedStory == id) {
      if (this.state.editForm) {
        return (
          <>
            <button onClick={() => this.toggleForm()}>
              {this.state.editForm ? 'Back' : 'Edit'}
            </button>
            <EditStoryFormContainer story={story}/>
          </>
        )
      } else {
        return (
          <>
            <button onClick={() => this.toggleForm()}>
              {this.state.editForm ? 'Back' : 'Edit'}
            </button>
            <p>Description: {description}</p>
            <p>Type: {story_type}</p>
            <p>Iteration: {iteration}</p>
            <p>Complexity: {complexity}</p>
            <p>Status: {status}</p>
            <p>Priority: {priority}</p>
            <p>Assigned To: {assigned_to}</p>
            <CommentListContainer storyId={id} />
          </>
        )}
      } else {
      return null
    }
  }
}

export default StoryDetail
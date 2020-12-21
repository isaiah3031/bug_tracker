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
    if (this.props.selectedStory == this.props.story.id) {
      if (this.state.editForm) {
        return (
          <div>
            <button onClick={() => this.toggleForm()}>
              {this.state.editForm ? 'View Details' : 'Edit'}
            </button>
            <EditStoryFormContainer story={this.props.story}/>
          </div>
        )
      } else {
        return (
        <div>
          <button onClick={() => this.toggleForm()}>
            {this.state.editForm ? 'ViewDetails' : 'Edit'}
          </button>
          <p>Description: {this.props.story.description}</p>
          <p>Type: {this.props.story.story_type}</p>
          <p>Iteration: {this.props.story.iteration}</p>
          <p>Complexity: {this.props.story.complexity}</p>
          <p>Status: {this.props.story.status}</p>
          <p>Priority: {this.props.story.priority}</p>
          <CommentListContainer storyId={this.props.story.id} />
        </div>
        )}
      } else {
      return (
        <div></div>
      )
    }
  }
}

export default StoryDetail
import React from 'react'
import { withRouter } from 'react-router-dom'
import EditStoryFormContainer from './edit_story_form_container'
import CommentListContainer from '../comments/comment_list_container'
import CommentFormContainer from '../comments/comment_form_container'

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
            <button onClick={() => {
              this.props.deleteStory(story)
              setTimeout(() => {
                this.props.history.go()
              }, 20)
              }}>delete</button>
            <h4>Type: <p>{story_type}</p></h4>
            <h4>Iteration: <p>{iteration}</p></h4>
            <h4>Complexity: <p>{complexity}</p></h4>
            <h4>Status: <p>{status}</p></h4>
            <h4>Priority: <p>{priority}</p></h4>
            <h4>Assigned To: <p>{assigned_to}</p></h4>
            <CommentFormContainer story={story} />
            <CommentListContainer story={story} />
          </>
        )}
      } else {
      return null
    }
  }
}

export default withRouter(StoryDetail)
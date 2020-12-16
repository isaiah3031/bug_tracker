import React from 'react'
import EditStoryFormContainer from './edit_story_form_container'
class StoryDetail extends React.Component {
  render() {
    if (this.props.selectedStory == this.props.story.id) {
    return (
      <div>
        <p>Description: {this.props.story.description}</p>
        <p>Type: {this.props.story.story_type}</p>
        <p>Iteration: {this.props.story.iteration}</p>
        <p>Complexity: {this.props.story.complexity}</p>
        <p>Status: {this.props.story.status}</p>
        <p>Priority: {this.props.story.priority}</p>
        <EditStoryFormContainer story={this.props.story}/>
      </div>
    )} else {
      return (
        <div></div>
      )
    }
  }
}

export default StoryDetail
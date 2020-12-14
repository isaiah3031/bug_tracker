import React from 'react'

class StoryDetail extends React.Component {
  render() {
    if (this.props.selectedStory == this.props.story.id) {
    return (
      <div>
        <p>Description: {this.props.story.description}</p>
        <p>Type: {this.props.story.type}</p>
        <p>Iteration: {this.props.story.iteration}</p>
        <p>Complexity: {this.props.story.complexity}</p>
        <p>Status: {this.props.story.status}</p>
      </div>
    )} else {
      return (
        <div></div>
      )
    }
  }
}

export default StoryDetail
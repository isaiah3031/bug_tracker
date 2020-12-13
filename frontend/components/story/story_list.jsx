import React from 'react';
import { withRouter } from 'react-router-dom'

class StoryList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchStories(this.props.match.params.projectId)
  }

  render() {
    let stories = this.props.stories
    return (
      <div>
        {Object.values(stories).map(story => 
          <li key={story.id}>{story.title}</li>
        )}
      </div>
    )
  }
}

export default withRouter(StoryList)
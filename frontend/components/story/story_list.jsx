import React from 'react';
import { withRouter } from 'react-router-dom'
import StoryDetail from './story_detail'
// Next I'm thinking Click a story to render a story detail component

class StoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStory: -1
    }
  }

  componentWillMount() {
    this.props.fetchStories(this.props.match.params.projectId)
  }

  setSelectedStory(storyId) {
    if (this.state.selectedStory == -1) {
        this.setState({ selectedStory: storyId})
    } else if (this.state.selectedStory == storyId) {
        this.setState({ selectedStory: -1 })
    } else {
        this.setState({ selectedStory: storyId })
    }
  }

  isSelectedStory(storyId) {
    return storyId == this.state.selectedStory
  }

  render() {
    let stories = this.props.stories
    return (
      <div>
        {Object.values(stories).map(story => 
          <li key={story.id}
            onClick={() => this.setSelectedStory(story.id)}>{story.title}
            <StoryDetail selectedStory={this.state.selectedStory} story={story} />
          </li>
        )}
      </div>
    )
  }
}

export default withRouter(StoryList)
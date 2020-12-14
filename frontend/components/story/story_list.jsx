import React from 'react';
import { withRouter } from 'react-router-dom'
import StoryDetail from './story_detail'
import NewStoryFormContainer from './new_story_form_container'
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
          <div>
            <li key={story.id}
              onClick={() => this.setSelectedStory(story.id)}>{story.title}
            </li>
            <StoryDetail selectedStory={this.state.selectedStory} story={story} />
          </div>
        )}
        <NewStoryFormContainer projectId={this.props.match.params.projectId}/>
      </div>
    )
  }
}

export default withRouter(StoryList)
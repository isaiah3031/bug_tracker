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


  // toggles the selected story and allows it to be set to none (-1)
  setSelectedStory(storyId) {
    if (this.state.selectedStory == -1) {
        this.setState({ selectedStory: storyId})
    } else if (this.state.selectedStory == storyId) {
        this.setState({ selectedStory: -1 })
    } else {
        this.setState({ selectedStory: storyId })
    }
  }

  // returns an array of stories sorted into three arrays: icebox, current, backlog
  sortStories() {
    let icebox = [] 
    let current = []
    let backlog = []
    Object.values(this.props.stories).map(story => {
      if (story.iteration == 'icebox'){
          icebox.push(story)
      } else if (story.iteration == 'current') {
          current.push(story)
      } else if (story.iteration == 'backlog') {
          backlog.push(story)
      }
    })
    return {icebox: icebox, current: current, backlog: backlog}
  }

  render() {
    if (Object.values(this.props.stories).length == 0) {
      return <div></div>
    }
    let sortedStories = this.sortStories()
    
    return (
      // Loops through stories of each iteration to expose a single story instance. 
      // iterations => stories => story

      <div>
        {Object.keys(sortedStories).map(iteration => {
          return <div>
            <h2>{iteration}</h2>
            {sortedStories[iteration].map(story => {
              return <div>
                <li key={story.id}
                  onClick={() => this.setSelectedStory(story.id)}>{story.title}
                </li>
                <StoryDetail selectedStory={this.state.selectedStory} story={story} />
              </div>
              }
            )}
            
          </div>
      })}
      <NewStoryFormContainer projectId={this.props.match.params.projectId}/>
    </div>
  )}
}

export default withRouter(StoryList)
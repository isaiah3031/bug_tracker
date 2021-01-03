import React from 'react';
import { withRouter } from 'react-router-dom'
import StoryDetail from './story_detail'
import QuickFormContainer from './quick_form_container'

class StoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStory: -1,
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

  // returns a hash of stories sorted into three arrays: icebox, current, backlog
  sortStoriesByIteration(stories) {
    let icebox = [] 
    let current = []
    let backlog = []
    let finished = []
    stories.map(story => {
      if (story.iteration == 'icebox'){
          icebox.push(story)
      } else if (story.iteration == 'current') {
          current.push(story)
      } else if (story.iteration == 'backlog') {
          backlog.push(story)
      } else if (story.iteration == 'finished') {
          finished.push(story)
      }
    })
    return {icebox: icebox, backlog: backlog, current: current, finished: finished}
  }

  // returns an array of sorted arrays
  sortStoriesByPriority() {
    return Object.values(this.props.stories).sort((storya, storyb) => 
      parseFloat(storya.priority) - parseFloat(storyb.priority)
    )
  }

  // returns start, finished or an empty string depending on string passed to it
  returnAppropriateText(iteration) {
    switch(iteration) {
      case 'current':
        return 'iteration'
      case 'backlog':
        return 'start'
      default:
        return ''
    }
  }
  render() {
    if (Object.values(this.props.stories).length == 0 ||
        this.props.stories.id) {
      return null
    }
    let sortedStories = this.sortStoriesByIteration(this.sortStoriesByPriority())

    return (
      // Loops through stories of each iteration to expose a single story instance. 
      // Array of Iterations => Iterations Array => story object
        <div className='iterations'>
          {Object.keys(sortedStories).map(iteration => 
              <div className='story-list'>
                <h2>{iteration}</h2>
              {sortedStories[iteration].map(story => {
                return <li className='story-component' key={story.id}>
                  <p className='description'
                    onClick={() => this.setSelectedStory(story.id)}>
                    {this.state.selectedStory == story.id ? story.description : `${story.description.substr(0, 60)}...`}
                  </p>
                  <QuickFormContainer story={story}/>
                  <StoryDetail selectedStory={this.state.selectedStory} story={story} />
                </li>
                }
              )}
            </div>
        )}
      </div>
  )}
}

export default withRouter(StoryList)
import React from 'react';
import { withRouter } from 'react-router-dom'
import StoryDetail from './story_detail'
import NewStoryFormContainer from './new_story_form_container'

class StoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStory: -1,
      editForm: false,
      newForm: false
    }
  }

  toggleNewForm() {
    this.setState({
      selectedStory: -1,
      editForm: false,
      newForm: !this.state.newForm
    })
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
    
    stories.map(story => {
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

  // returns an array of sorted arrays
  sortStoriesByPriority() {
    return Object.values(this.props.stories).sort((storya, storyb) => 
      parseFloat(storya.priority) - parseFloat(storyb.priority)
    )
  }

  // returns start, finished or an empty string depending on string passed to it
  returnAppropriateText(iteration) {
    switch(iteration) {
      case 'icebox':
        return ''
      case 'current':
        return 'iteration'
      case 'backlog':
        return 'start'
    }
  }
  render() {
    if (Object.values(this.props.stories).length == 0) {
      return <div></div>
    }
    let sortedStories = this.sortStoriesByIteration(this.sortStoriesByPriority())
    
    return (
      // Loops through stories of each iteration to expose a single story instance. 
      // Array of Iterations => Iterations Array => story object

      <div className='iterations-container'>
        <button onClick={() => this.toggleNewForm()}>
          {this.state.newForm ? 'View Stories' : 'Create a new Story'}
        </button>
        <div className='iterations'>
          <div className={this.state.newForm ? 'popup-background' : 'hidden'}>
            <NewStoryFormContainer projectId={this.props.match.params.projectId}/>
          </div>
          {Object.keys(sortedStories).map(iteration => {
            return <div className='story-list'>
              <h2>{iteration}</h2>
              {sortedStories[iteration].map(story => {
                return <li className='story-component' key={story.id}>
                  <h3 onClick={() => this.setSelectedStory(story.id)}>{story.title}</h3>
                  <button>{this.returnAppropriateText(story.iteration)}</button>
                  <StoryDetail selectedStory={this.state.selectedStory} story={story} />
                </li>
                }
              )}
              
            </div>
        })}
      </div>
    </div>
  )}
}

export default withRouter(StoryList)
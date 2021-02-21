import React from 'react';
import { withRouter } from 'react-router-dom'
import StoryDetail from './story_detail'
import QuickFormContainer from './quick_form_container'
import ToggleNewForm from './toggle_new_form'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import NewStoryFormContainer from './new_story_form_container'

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

  // returns an array of stories sorted by their priority
  sortStoriesByPriority() {
    return Object.values(this.props.stories).sort((storya, storyb) => 
      parseFloat(storya.priority) - parseFloat(storyb.priority)
    )
  }

  // returns start, finished or an empty string depending on string passed to it
  toggleDescription(story) {
    if (this.state.selectedStory == story.id) { 
      return story.description 
    } else {
      return `${story.description.substr(0, 60)}...`
    }  
  }

  updatePriority(story, newPriority) {
    let updatedStory = story
    updatedStory.priority = newPriority
    this.props.editStory(updatedStory).then(() =>
      this.props.fetchStories(this.props.match.params.projectId)
    )
  }

  handleOnDragEnd(result) {
    const story = this.props.stories[parseInt(result.draggableId)]
    this.updatePriority(story, result.destination.index)
  }

  
  renderLogin = () => {
    props.history.push('/login')
  }

  mmyy = (date) => {
    let monthDay = date.split("-")
    let months = ['Jan', 'Feb', "Mar", 'Apr', 'May', 'June', 'July', 'Aug', 'Oct', 'Nov', 'Dec']
    return `${months[parseInt(monthDay[0]) - 1]} ${monthDay[1]}`
  }

  // Loops through stories of each iteration to expose a single story instance. 
  // [iteration1, iteration2, iteration3, iteration4] => 
  // [story1, story2, story3...]
  render() {
    if (Object.values(this.props.stories).length == 0 ||
        this.props.stories.id) {
      return <NewStoryFormContainer projectId={this.props.match.params.projectId}/>
    }
    let sortedStories = this.sortStoriesByIteration(this.sortStoriesByPriority())

    return (
      <div className='main-content iterations'>
        {Object.keys(sortedStories).map(iteration => 
          <DragDropContext onDragEnd={res => this.handleOnDragEnd(res)}>
            <Droppable droppableId='story-component'>
              {(provided) => (
                <div className='story-list' {...provided.droppableProps} ref={provided.innerRef}>
                <h2 className='iteration-header'>{iteration}
                  {this.props.loggedIn ? 
                  <ToggleNewForm projectId={this.props.match.params.projectId} iteration={iteration}/> :
                  renderLogin()
                }</h2>
                  {sortedStories[iteration].map((story, index) => 
                    <Draggable key={story.id} draggableId={story.id.toString()} story={story} index={story.priority}>
                      {(provided) => (
                        // Eventually put all of this in a storyPreview component
                      <ul {...provided.draggableProps } 
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className='story-component' 
                        key={story.id}>
                        <p className='description'
                          onClick={() => this.setSelectedStory(story.id)}
                          >
                          {this.toggleDescription(story)}
                        </p>
                        <QuickFormContainer story={story}/>
                        <StoryDetail selectedStory={this.state.selectedStory} story={story} />
                        <p className='creation-date'>{this.mmyy(story.created_at.substr(5,5))}</p>
                      </ul>
                      )}
                    </Draggable>
                  )}
                  {provided.placeholder}
                </div>  
              )}
            </Droppable>
          </DragDropContext>
      )}
    </div>
  )}
}

export default withRouter(StoryList)
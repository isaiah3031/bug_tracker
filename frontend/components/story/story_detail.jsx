import React from 'react'
import { withRouter } from 'react-router-dom'
import EditStoryFormContainer from './edit_story_form_container'
import CommentListContainer from '../comments/comment_list_container'
import CommentFormContainer from '../comments/comment_form_container'
import Star from '../../../app/assets/images/star_icon.svg'
import Arrow from '../../../app/assets/images/directional_arrow.svg'
import Feature from '../../../app/assets/images/feature_icon.svg'
import Bug from '../../../app/assets/images/black_bug_icon.png'
import RedX from '../../../app/assets/images/red_x.png'

class StoryDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false,
      commentForm: false
    }
  }

  toggleComponent(e) {

    this.setState({ [e.target.id]: !this.state[e.target.id] })
  }

  complexityRank(complexity) {
    if (complexity == -1) return <p>Not Ranked</p>
    return <ul>
      {
        [...Array(complexity)].map(() => <img className='icon' src={Star} />)
      }
    </ul>
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
      } } = this.props

    if (selectedStory == id) {
      if (this.state.editForm) {
        return (
          <>
            <button id='editForm' onClick={(e) => this.toggleComponent(e)}>
              {this.state.editForm ? 'Back' : 'Edit'}
            </button>
            <EditStoryFormContainer story={story} />
          </>
        )
      } else {
        return (
          <>
            <img className='delete-button' src={RedX} onClick={() => {
              this.props.deleteStory(story)
              setTimeout(() => {
                this.props.history.go()
              }, 20)
            }} />
            <section className='properties'>
              <h4 className='property-display'>
                Complexity: {this.complexityRank(complexity)}
              </h4>
              <img className='icon' src={story_type == 'bug' ? Bug : Feature} />
            </section>
            <button id='editForm' onClick={(e) => this.toggleComponent(e)}>
              {this.state.editForm ? 'Back' : 'Edit'}
            </button>
            <button id='commentForm' onClick={(e) => this.toggleComponent(e)}>
              {this.state.commentForm ? 'Back' : 'Comment'}
            </button>
            {this.state.commentForm && <CommentFormContainer story={story} />}
            <CommentListContainer story={story} />
          </>
        )
      }
    } else {
      return null
    }
  }
}

export default withRouter(StoryDetail)
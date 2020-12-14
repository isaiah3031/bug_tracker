import { connect } from 'react-redux'
import StoryForm from './story_form'
import { createStory } from '../../actions/stories_actions'

const mapStateToProps = (state, ownProps) => ({
  formType: 'new',
  projectId: ownProps.projectId
})

const mapDispatchToProps = dispatch => ({
  processForm: (story) => {
    debugger
    dispatch(createStory(story.project_id, {story: story}))
  }
})

const NewStoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)

export default NewStoryFormContainer;
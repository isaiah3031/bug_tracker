import { connect } from 'react-redux'
import StoryForm from './story_form'
import { createStory, fetchStories } from '../../actions/stories_actions'

const mapStateToProps = (state, ownProps) => ({
  formType: 'new',
  currentUser: state.session.id,
  projectId: ownProps.projectId,
  iteration: ownProps.iteration
})

const mapDispatchToProps = dispatch => ({
  processForm: (story) => dispatch(createStory(story)),
  fetchStories: (projectId) => dispatch(fetchStories(projectId))
})

const NewStoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)

export default NewStoryFormContainer;
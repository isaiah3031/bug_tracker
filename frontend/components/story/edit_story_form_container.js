import { connect } from 'react-redux'
import StoryForm from './story_form'
import { editStory, fetchStories } from '../../actions/stories_actions'

const mapStateToProps = (state, ownProps) => ({
  formType: 'edit',
  currentUser: state.session.id,
  story: ownProps.story
})

const mapDispatchToProps = dispatch => ({
  processForm: (story) => dispatch(editStory(story)),
  fetchStories: (projectId) => dispatch(fetchStories(projectId))
})

const EditStoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)

export default EditStoryFormContainer;
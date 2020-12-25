import { connect } from 'react-redux'
import { editStory } from '../../actions/stories_actions'
import QuickForm from './quick_form'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session,
  story: ownProps.story
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (story) => dispatch(editStory(story.project_id, story.id, { story: story }))
})

const QuickFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickForm)

export default QuickFormContainer;
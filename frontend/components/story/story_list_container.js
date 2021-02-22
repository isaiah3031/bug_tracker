import { connect } from 'react-redux'
import { fetchStories, editStory, deleteStory } from '../../actions/stories_actions'
import StoryList from './story_list'

const mapStateToProps = (state) => ({
  stories: state.entities.stories,
  loggedIn: Boolean(state.session.id),
  loading: state.ui.loading
})

const mapDispatchToProps = dispatch => ({
  fetchStories: projectId => dispatch(fetchStories(projectId)),
  editStory: story => dispatch(editStory(story)),
  deleteStory: story => dispatch(deleteStory(story))
})

const StoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList)

export default StoryListContainer
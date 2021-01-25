import { connect } from 'react-redux'
import { fetchStories, editStory } from '../../actions/stories_actions'
import StoryList from './story_list'

const mapStateToProps = (state) => ({
  stories: state.entities.stories,
  loggedIn: Boolean(state.session.id),
  loading: state.ui.loading
})

const mapDispatchToProps = dispatch => ({
  fetchStories: projectId => dispatch(fetchStories(projectId)),
  editStory: story => dispatch(editStory(story))
})

const StoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList)

export default StoryListContainer
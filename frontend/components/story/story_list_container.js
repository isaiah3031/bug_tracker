import { connect } from 'react-redux'
import { fetchStories } from '../../actions/stories_actions'
import StoryList from './story_list'

const mapStateToProps = (state) => ({
  stories: state.entities.stories
})

const mapDispatchToProps = dispatch => ({
  fetchStories: projectId => dispatch(fetchStories(projectId))
})

const StoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList)

export default StoryListContainer
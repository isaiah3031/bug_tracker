import { connect } from 'react-redux'
import AssignedStories from './assigned_stories'

const mapStateToProps = state => ({
  currentUser: state.session
})

const AssignedStoriesContainer = connect(
  mapStateToProps,
  null
)(AssignedStories)

export default AssignedStoriesContainer
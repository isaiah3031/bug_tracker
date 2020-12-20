import {fetchComments} from '../../actions/comment_actions'
import { connect } from 'react-redux'
import CommentList from './comment_list'

const mapStateToProps = (state, ownProps) => ({
  comments: state.entities.comments,
  storyId: ownProps.storyId
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (projectId, storyId) => dispatch(fetchComments(projectId, storyId))
})

const CommentListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)

export default CommentListContainer
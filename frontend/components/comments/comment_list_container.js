import {fetchComments} from '../../actions/comment_actions'
import { connect } from 'react-redux'
import CommentList from './comment_list'

const mapStateToProps = (state, ownProps) => ({
  comments: state.entities.comments,
  storyId: ownProps.storyId
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (story) => dispatch(fetchComments(story))
})

const CommentListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)

export default CommentListContainer
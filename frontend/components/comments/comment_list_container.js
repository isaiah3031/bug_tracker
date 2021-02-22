import {fetchComments, deleteComment} from '../../actions/comment_actions'
import { connect } from 'react-redux'
import CommentList from './comment_list'

const mapStateToProps = (state, ownProps) => ({
  comments: state.entities.comments,
  story: ownProps.story
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (story) => dispatch(fetchComments(story)),
  deleteComment: (story, comment) => dispatch(deleteComment(story, comment)) 
})

const CommentListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)

export default CommentListContainer
import { connect } from 'react-redux'
import CommentForm from './comment_form'
import { createComment, fetchComments } from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => ({
  story: ownProps.story,
  currentUser: state.session,
})

const mapDispatchToProps = dispatch => ({
  processForm: (story, comment) => dispatch(createComment(story, comment)),
  fetchComments: (story) => dispatch(fetchComments(story))
})

const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)

export default CommentFormContainer
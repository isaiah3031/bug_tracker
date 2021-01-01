import * as types from '../constants/action_types'
import * as CommentAPI from '../util/comment_api_util'

export const receiveComments = (comments) => ({
  type: types.RECEIVE_COMMENTS,
  comments
})

export const receiveComment = (comment) => ({
  type: types.RECEIVE_COMMENT,
  comment
})

export const startLoading = () => ({
  type: types.START_LOADING
})
// Done
export const fetchComments = (story) => dispatch => {
  dispatch(startLoading())
  return CommentAPI.fetchComments(story).then(comments =>
    dispatch(receiveComments(comments))
  )
}

// Consider deleting
export const fetchComment = (story, commentId) => dispatch => {
  dispatch(startLoading())
  return CommentAPI.fetchComment(story, commentId).then(comment =>
    dispatch(receiveComment(comment))
  )
}

// done
export const createComment = (story, comment) => dispatch => {
  dispatch(startLoading())
  return CommentAPI.createComment(story, comment).then(comment =>
    dispatch(receiveComment(comment))
  )
}

// Consider deleting
export const editComment = (projectId, comment) => dispatch => {
  dispatch(startLoading())
  return CommentAPI.editComment(projectId, comment).then(comment =>
    dispatch(receiveComment(comment))
  )
}


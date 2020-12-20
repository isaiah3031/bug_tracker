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

export const fetchComments = (projectId, storyId) => dispatch =>
  CommentAPI.fetchComments(projectId, storyId).then(comments =>
    dispatch(receiveComments(comments))
  )

export const fetchComment = (projectId, storyId, commentId) => dispatch =>
  CommentAPI.fetchComment(projectId, storyId, commentId).then(comment =>
    dispatch(receiveComment(comment))
  )

export const createComment = (projectId, storyId, comment) => dispatch =>
  CommentAPI.createComment(projectId, storyId, comment).then(comment =>
    dispatch(receiveComment(comment))
  )

export const editComment = (projectId, storyId, commentId, comment) => dispatch =>
  CommentAPI.editComment(projectId, storyId, commentId, comment).then(comment =>
    dispatch(receiveComment(comment))
  )
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

export const fetchComments = (projectId, storyId) => dispatch => {
  dispatch(startLoading())
  CommentAPI.fetchComments(projectId, storyId).then(comments =>
    dispatch(receiveComments(comments))
  )
}
export const fetchComment = (projectId, storyId, commentId) => dispatch => {
  dispatch(startLoading())
  CommentAPI.fetchComment(projectId, storyId, commentId).then(comment =>
    dispatch(receiveComment(comment))
  )
}

export const createComment = (story, comment) => dispatch => {
  dispatch(startLoading())
  CommentAPI.createComment(story.projectId, story.id, comment).then(comment =>
    dispatch(receiveComment(comment))
  )
}

export const editComment = (projectId, storyId, commentId, comment) => dispatch => {
  dispatch(startLoading())
  CommentAPI.editComment(projectId, storyId, commentId, comment).then(comment =>
    dispatch(receiveComment(comment))
  )
}

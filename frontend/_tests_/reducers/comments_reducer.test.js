import CommentReducer from '../../reducers/comment_reducer'
import * as types from '../../constants/action_types'

describe('comment reducer', () => {
  it ('should return the initial state when passed an unfamiliar type', () => {
    expect(CommentReducer({}, { type: undefined})).toEqual({})
  })

  it ('should handle RECEIVE_COMMENTS', () => {
    let comments = {
      1 : { comment: 'number one' },
      2 : { commnet: 'number two' }
    }
    expect(CommentReducer({}, {
      type: types.RECEIVE_COMMENTS, 
      comments: comments
    })).toEqual(comments)
  })

  it ('should handle RECEIVE_COMMENT', () => {
    let comment = { comment: 'commentcomment' }
    expect(CommentReducer({}, {
      type: types.RECEIVE_COMMENT,
      comment: comment
    })).toEqual(comment)
  })
})